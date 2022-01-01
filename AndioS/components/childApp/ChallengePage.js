import React, { useState, useEffect } from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import localize from '../locale/Localization';
import Background from '../Background';

import { Camera } from 'expo-camera';

import { getChallenges, modifyChallenge, datesAreOnSameDay, datesHourDiff } from '../Store'

import styles from '../Styles';

function ChallengePage({ route, navigation }) {
    const { challenge } = route.params;

    const [hasAudioPermission, setHasAudioPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [record, setRecord] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        navigation.setOptions({ headerTitle: challenge.title });

        let isSameDay = null;

        for (const dates of challenge.dates) {
            if (!datesAreOnSameDay(new Date(dates.date), new Date())) {
                isSameDay = datesHourDiff(new Date(dates.date), new Date());
            }
        }

        if (!isSameDay) {
            alert('You need to wait' + isSameDay + 'hours');
            navigation.pop();
        }

        (async () => {
            const cameraStatus = await Camera.requestPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
            const audioStatus = await Camera.requestMicrophonePermissionsAsync();
            setHasAudioPermission(audioStatus.status === 'granted');
        })();
    }, []);

    const takeVideo = async () => {
        if(camera){
            const data = await camera.recordAsync()
            setRecord(data.uri);
            console.log(data.uri);
        }
    }

    const stopVideo = async () => {
        camera.stopRecording();

        challenge.dates.find(dates => datesAreOnSameDay(dates.date, new Date())).finished = true;
        challenge.dates.find(dates => datesAreOnSameDay(dates.date, new Date())).videourl = record;
        modifyChallenge(challenge);

        alert(localize('challenge-finished'));
        navigation.pop();
    }

    return (  
        <SafeAreaView style={styles.container}>
            <Background />

            <View style={styles.content}>
                <View>
                    <Camera ref={ref => setCamera(ref)} type={type} />
                </View>
                
                {
                    hasCameraPermission === false || hasAudioPermission === false && 
                    <Text style={{fontSize: 20}}>No access to camera</Text>
                } {
                    hasCameraPermission === true && hasAudioPermission === true &&
                    <TouchableOpacity onPress={() => takeVideo()}>
                        <Text style={styles.input}>Start recording!</Text>
                    </TouchableOpacity>
                }
            </View>
        </SafeAreaView >
    );
}

export default ChallengePage;