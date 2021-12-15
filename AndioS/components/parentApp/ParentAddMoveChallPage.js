import React from 'react';

import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { addChallenge } from '../Store'

import localize from '../locale/Localization';
import Background from '../Background';

import styles from '../Styles';

function ParentAddMoveChallPage() {
    const [title, changeTitle] = React.useState('');
    const [steps, changeSteps] = React.useState(null);

    const [date, setDate] = React.useState(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    const [show, setShow] = React.useState(false);

    const [reward, changeReward] = React.useState(null);

    const onCalendarChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        
        setShow(false);

        if (currentDate.getTime() < new Date().getTime()) { 
            alert('Date must be in the future');
            return;
        }

        setDate(currentDate);
    };

    const onAddChallenge = async () => {
        if (!title || !steps || !date || !reward) {
            alert('Please fill all the fields');
            return;
        }

        await addChallenge(title, steps, date, reward);

        alert('Challenge added');
    }

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <TextInput style={styles.input} onChangeText={changeTitle} value={title} placeholder={localize('title')} />
            <TextInput style={styles.input} onChangeText={changeSteps} value={steps} keyboardType='numeric' placeholder={localize('steps')} />
            <TouchableOpacity onPress={() => setShow(true)}>
                <Text style={styles.input}>{localize('choose-date')}: {date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {show && <DateTimePicker testID="dateTimePicker" value={date} mode='date' is24Hour={true} display="default" onChange={onCalendarChange} />}
            <TextInput style={styles.input} onChangeText={changeReward} value={reward} placeholder={localize('reward')} />
            <TouchableOpacity onPress={async () => onAddChallenge()}>
                <Text style={[styles.input, {textAlign: 'center', backgroundColor: '#000', color: '#FFF'}]}>{localize('add-challenge')} ➕</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ParentAddMoveChallPage;