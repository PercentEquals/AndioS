import React from 'react';

import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import * as DocumentPicker from 'expo-document-picker';

import { addChallenge } from '../Store'

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';

function ParentAddMoveChallPage() {
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

        await addChallenge(title, chall, date, reward, chosenFile);

        alert(localize('add-challenge-success'));
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
            <TouchableOpacity onPress={async () => DocumentPicker.getDocumentAsync().then(data => setChosenFile(data))}>
                <Text style={styles.input}>{chosenFile ? chosenFile.name : localize('add-file-reward')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => onAddChallenge()}>
                <Text style={[styles.input, {textAlign: 'center', backgroundColor: '#000', color: '#FFF'}]}>{localize('add-challenge')} ➕</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ParentAddMoveChallPage;