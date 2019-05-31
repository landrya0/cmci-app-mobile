import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import RippleButton from '../../components/RippleButton'
import PSText from '../../components/PSText'

export default class EventDetailsRow extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <View style={styles.container}>
                <View style={styles.icon}>
                    <RippleButton name={data.leftIconName} color='#424242' />
                </View>
                <View style={styles.contentArea}>
                    {
                        'contentHeader' in data
                            ? <PSText type='Italic'>{data.contentHeader}</PSText>
                            : null
                    }
                    <PSText type={data.contentHeader === 'Description' ? 'Regular' : 'Bold'}>{data.contentText}</PSText>
                </View>
                {
                    'rightIconName' in data
                        ? <View style={styles.icon}>
                            <RippleButton name={data.rightIconName} color='#424242' />
                          </View>
                        : null
                }
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
        borderBottomWidth: 0.3,
        borderColor: '#424242'
    },
    contentArea: {
        flex: 4,
    },
    contentHeader: {
        flex: 1,
    },
    contentText: {
        flex: 3,
    },
    icon: {
        flex: 0,
        alignSelf: 'center',
    },
});