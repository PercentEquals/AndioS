import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import localize from './locale/Localization';

function datesDayDiff(date1, date2) {
    let diff = date1.getTime() - date2.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function datesHourDiff(date1, date2) {
    let diff = date1 - date2;
    return Math.ceil(diff / (1000 * 60 * 60));
}

function datesAreOnSameDay (first, second) {
    return first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
}

async function addChallenge(title, chall, date, reward) {
    let challenges = await getChallenges();

    let today = new Date();
    let dates = [];

    while (today.getTime() <= date.getTime()) {
        today.setDate(today.getDate() + 1);

        await Notifications.scheduleNotificationAsync({
            identifier: 'challenge#' + today.getTime(),
            content: {
                title: '🏆 ' + localize('notification-title'),
                body: localize('notification-body-pre') + '"' + chall + '"' + localize('notification-body-post'),
            },
            trigger: { seconds: datesHourDiff(date, today) * 60 - 43200 },
        });

        dates.push({
            date: new Date(today),
            done: false,
        });
    }
    
    await Notifications.scheduleNotificationAsync({
        identifier: 'challenge-added#' + today.getTime(),
        content: {
            title: '🏆 ' + localize('add-challenge-success'),
        },
        trigger: { seconds: 1 },
    });

    challenges.push({
        id: Date.now(),
        title: title,
        dates: dates,
        reward: reward,
        chall: chall,
        finished: false,
        videourl: null,
    });
    await AsyncStorage.setItem('challenges', JSON.stringify(challenges));
}

async function getChallenges() {
    const challenges = await AsyncStorage.getItem('challenges');
    if (challenges) {
        return JSON.parse(challenges);
    }
    return [];
}

async function modifyChallenge(challenge) {
    let challenges = await getChallenges();
    let index = challenges.findIndex(c => c.id === challenge.id);
    challenges[index] = challenge;
    await AsyncStorage.setItem('challenges', JSON.stringify(challenges));
}

async function removeChallenge(challenge) {
    let challenges = await getChallenges();
    let index = challenges.findIndex(c => c.id === challenge.id);
    challenges.splice(index, 1);
    await AsyncStorage.setItem('challenges', JSON.stringify(challenges));
}

export {
    addChallenge,
    getChallenges,
    modifyChallenge,
    removeChallenge,
    datesDayDiff,
    datesHourDiff,
    datesAreOnSameDay
}