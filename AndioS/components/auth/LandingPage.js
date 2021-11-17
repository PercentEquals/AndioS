import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import localize from '../locale/Localization';

function LandingPage() {
    return (  
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#05e8ba', '#087ee1']}
                locations={[0, 0.74]}
                useAngle={true}
                angle={315}
                angleCenter={{ x: 0.5, y: 0.5 }}
                style={styles.background}
            />

            <View style={styles.content}>
                <Text style={styles.header}>{localize('welcome')} 👋</Text>

                <Button
                    onPress={() => {}}
                    title={localize('start') + '💪'}
                    color="#000"
                    accessibilityLabel="Start button"
                />

                <Button
                    onPress={() => {}}
                    title={localize('parent-zone') + '🔐'}
                    color="#000"
                    accessibilityLabel="Parent zone button"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        zIndex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
    header: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
    }
});

//background-color: #05e8ba;
//background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);


export default LandingPage;