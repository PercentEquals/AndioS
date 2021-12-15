import React, { useEffect } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import localize from '../locale/Localization';
import styles from '../Styles';

function Challenge({ challenge }) {
    const [remaining, setRemaining] = React.useState(null);
    const [followingDate, setFollowingDate] = React.useState(null);

    function datesHourDiff(date1, date2) {
        let diff = date1 - date2;
        return Math.ceil(diff / (1000 * 60 * 60));
    }

    useEffect(() => {
        for (const date of challenge.dates) {
            let today = new Date().getTime();
            let challengeDate = new Date(date.date).getTime();

            if (remaining === null && date.done === false && today <= challengeDate) {
                setRemaining(datesHourDiff(challengeDate, today));
                setFollowingDate(date.date);
                return;
            }
        };
    });

    return (  
        <View style={challengeStyles.challenge}>
            <View style={challengeStyles.wrapText}>
                <Text style={challengeStyles.text}>{challenge.title}</Text>
            </View>
            <TouchableOpacity style={challengeStyles.button} onPress={() => {}}>
                <Text style={challengeStyles.buttonText}>START 🔥</Text>
            </TouchableOpacity>

            <Text style={challengeStyles.timer}>⏱️ {localize('remaining-time')}: {remaining}h</Text>
            <View style={challengeStyles.boxes}>
                {
                    challenge.dates.map(date => {
                        let today = new Date().getTime();
                        let challengeDate = new Date(date.date).getTime();

                        if (today <= challengeDate) {
                            return (<Text style={challengeStyles.boxText} key={date.date}>{date.date === followingDate && '⏱️'}</Text>)
                        } else if (date.done) {
                            return (<Text style={[challengeStyles.boxText, challengeStyles.boxTextCompleted]} key={date.date}>🏅</Text>)
                        } else {
                            return (<Text style={[challengeStyles.boxText, challengeStyles.boxTextFailed]} key={date.date}>💀</Text>)
                        }
                    })
                }
            </View>
        </View>
    );
}

var challengeStyles = StyleSheet.create({
    challenge: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: 300,
        minHeight: 120,
        flexGrow: 0,
        borderRadius: 5,
        borderColor: '#000',
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap',
        width: '100%',
    },
    buttonWrapper: {
        marginTop: 20,
    },
    button: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#FFB404',
        textTransform: 'uppercase',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    buttonText: {
        fontSize: 18,
        padding: 6,
        color: '#000',
    },
    wrapText: {
        flex: 1,
        flexDirection: 'row',
    },
    timer: {
        fontSize: 12,
        padding: 5,
        position: 'absolute',
        bottom: 35,
        color: '#438029',
        left: 0,
    },
    boxes: {
        position: 'absolute',
        bottom: 38,
        right: 2,
        flex: 1,
        flexDirection: 'row',
    },
    boxText: {
        width: 20,
        height: 20,
        marginRight: 1,
        borderRadius: 5,
        borderColor: '#AAA',
        borderWidth: 1,
        padding: 1,
        backgroundColor: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTextCompleted: {
        backgroundColor: '#90EE90',
    },
    boxTextFailed: {
        backgroundColor: '#ffcccb',
    }
});

export default Challenge;