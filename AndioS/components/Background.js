import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import styles from './Styles';

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

export default Background;