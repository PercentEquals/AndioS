import React from 'react';

import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Background() {
    return (  
        <LinearGradient
        // Background Linear Gradient
        colors={['#05e8ba', '#087ee1']}
        locations={[0, 0.74]}
        useAngle={true}
        angle={315}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.background}
        />
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
});

export default Background;