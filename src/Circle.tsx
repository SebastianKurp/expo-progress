//Based off a project from from William Canadillion 
//src:https://github.com/wcandillon/can-it-be-done-in-react-native/blob/master/bonuses/circular-progress/components/CircularProgress.tsx

import * as React from 'react';
import {
    StyleSheet
} from 'react-native';
import Animated from "react-native-reanimated";
import Svg, {
    Defs, LinearGradient, Stop, Circle,
} from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const { PI } = Math;

function ProgressCircle() {
    const circumference = 25 * 2 * PI;

    return (
        <Svg width={100} height={100} style={styles.container}>
            <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
                    <Stop offset="0" stopColor="#f7cd46" />
                    <Stop offset="1" stopColor="#ef9837" />
                </LinearGradient>
            </Defs>
            <Circle
                stroke="rgba(255, 255, 255, 0.2)"
                fill="none"
                {...{
                    strokeWidth: 50, cx: 25, cy: 25, r: 25,
                }}
            />
            <AnimatedCircle
                stroke="url(#grad)"
                fill="none"
                strokeDasharray={`${circumference}, ${circumference}`}
                {...{
                    strokeDashoffset: 25, strokeWidth: 25, cx: 25, cy: 25, r: 25,
                }}
            />
        </Svg>
    )
}
export default ProgressCircle;

const styles = StyleSheet.create({
    container: {
        transform: [{ rotateZ: "270deg" }],
    },
});
