import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    const handleControl = (direction) => {
        // Add code to control the robot based on the direction (e.g., "forward", "backward", "left", "right").
        alert(`Robot is moving ${direction}`);
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Command Here</Text>
            <View style={styles.remoteControl}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handleControl('forward')}>
                        <Text style={styles.buttonText}>Forward</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handleControl('left')}>
                        <Text style={styles.buttonText}>Left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleControl('right')}>
                        <Text style={styles.buttonText}>Right</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handleControl('backward')}>
                        <Text style={styles.buttonText}>Backward</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    remoteControl: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'tomato',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
