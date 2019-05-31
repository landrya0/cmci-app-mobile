import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class EventDetailsRow extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Text>Left icon</Text>
                </View>
                <View style={styles.contentArea}>
                    <View style={styles.contentHeader}>
                        <Text>contentHeader</Text>
                    </View>
                    <View style={styles.contentText}>
                        <Text>contentText</Text>
                    </View>
                </View>
                <View style={styles.icon}>
                    <Text>Right icon</Text>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    contentArea: {
        flex: 4,
    },
    contentHeader: {
        backgroundColor: 'yellow',
        flex: 1,
    },
    contentText: {
        backgroundColor: 'blue',
        flex: 3,
    },
    icon: {
        flex: 1,
        backgroundColor: 'green',
    },
});