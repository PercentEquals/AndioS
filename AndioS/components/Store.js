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

const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

async function addChallenge(title, steps, date, reward) {
    let challenges = await getChallenges();

    let today = new Date();
    let dates = [];

    let day_step = steps / datesDayDiff(date, today);

    while (today.getTime() <= date.getTime()) {
        today.setDate(today.getDate() + 1);

        await Notifications.scheduleNotificationAsync({
            identifier: 'challenge#' + today.getTime(),
            content: {
                title: '🏆 ' + localize('notification-title'),
                body: localize('notification-body-pre') + day_step + localize('notification-body-post'),
            },
            trigger: { seconds: datesHourDiff(date, today) * 3600 },
        });

        dates.push({
            date: new Date(today),
            steps: day_step,
            done: false,
        });
    }
    
    challenges.push({
        id: Date.now(),
        title: title,
        dates: dates,
        reward: reward,
        finished: false,
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