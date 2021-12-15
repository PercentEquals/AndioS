import AsyncStorage from '@react-native-async-storage/async-storage';

function datesDayDiff(date1, date2) {
    let diff = date1.getTime() - date2.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

async function addChallenge(title, steps, date, reward) {
    let challenges = await getChallenges();

    let today = new Date();
    let dates = [];

    let day_step = steps / datesDayDiff(date, today);

    while (today.getTime() <= date.getTime()) {
        today.setDate(today.getDate() + 1);

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

export {
    addChallenge,
    getChallenges,
    datesDayDiff,
}