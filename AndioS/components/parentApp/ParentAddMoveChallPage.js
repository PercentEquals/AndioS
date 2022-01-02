import React from 'react';

import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

import { addChallenge } from '../Store'

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';

function ParentAddMoveChallPage({navigation}) {
    const [title, changeTitle] = React.useState('');
    const [chall, changeChall] = React.useState('');

    const [date, setDate] = React.useState(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    const [show, setShow] = React.useState(false);

    const [reward, changeReward] = React.useState(null);

    const [chosenFile, setChosenFile] = React.useState(null);

    const onCalendarChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        
        setShow(false);

        if (currentDate.getTime() < new Date().getTime()) { 
            alert(localize('error-date'));
            return;
        }

        setDate(currentDate);
    };

    const onAddChallenge = async () => {
        if (!(title.length > 0) || !chall || !date || !reward) {
            alert(localize('fill-all-fields'));
            return;
        }

        try {
            console.log(chosenFile);
            if (chosenFile !== null && chosenFile.type !== 'cancel') {
                const fileBuffor = `${FileSystem.documentDirectory}AndioS/${chosenFile.name}`;
                await FileSystem.copyAsync({ from: `file:///${chosenFile.uri.replace('file:///', '')}`, to: `file:///${fileBuffor.replace('file:///', '')}` });
                chosenFile.realUri = fileBuffor;
            }

            await addChallenge(title, chall, date, reward, chosenFile);

            alert(localize('add-challenge-success'));

        } catch (e) { 
            alert(e);
        }
    }

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <TextInput style={styles.input} onChangeText={changeTitle} value={title} placeholder={localize('title')} />
            <TextInput style={styles.input} onChangeText={changeChall} value={chall} placeholder={localize('challenge')} />
            <TouchableOpacity onPress={() => setShow(true)}>
                <Text style={styles.input}>{localize('choose-date')}: {date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {show && <DateTimePicker testID="dateTimePicker" value={date} mode='date' is24Hour={true} display="default" onChange={onCalendarChange} />}
            <TextInput style={styles.input} onChangeText={changeReward} value={reward} placeholder={localize('reward')} />
            <TouchableOpacity onPress={async () => { 
                Alert.alert(localize('select'), "", [
                    { text: localize('load-file'), onPress: async () => { 
                        try {
                            const file = await DocumentPicker.getDocumentAsync();
                            setChosenFile(file);
                        } catch (e) {
                            alert(e);
                        }
                    }},
                    { text: localize('take-photo'), onPress: () => {
                        navigation.navigate('ParentCamera', { setChosenFile: (data) => { 
                            data.type = 'accepted'; 
                            data.name = 'AndioS_' + new Date().getTime() + '.jpg';
                            setChosenFile(data);
                        }});
                    }},
                ]);
                
            }}>
                <Text style={styles.input}>{(chosenFile !== null && chosenFile.type !== 'cancel') ? chosenFile.name : localize('add-file-reward')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => onAddChallenge()}>
                <Text style={[styles.input, {textAlign: 'center', backgroundColor: '#000', color: '#FFF'}]}>{localize('add-challenge')} ➕</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ParentAddMoveChallPage;