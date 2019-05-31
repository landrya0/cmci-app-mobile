import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import  EventDetailsRow from './EventDetailsRow'

export default class EventDetailsScreen extends React.Component {

    static getEventDetailsByID(eventID) {
        let eventDetails = null;

        // Check if the ID is consistent and the event exists
        if (eventID === 'NO-ID') {
            return null;
        }

        //TODO: Query the event details using REDUX
        eventDetails = {
            imageSrc: "https://images.pexels.com/photos/2333750/pexels-photo-2333750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Retraite sur l'excellence académique",
            date: "19 avril 2019",
            time: "19h00",
            address: "8 Avenue de la Valeuse ",
            city: "Hérouville Saint-Clair",
            zipCode: "14200",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate",
        };

        return eventDetails;
    }

    render() {
        const {navigation} = this.props;
        const eventID = navigation.getParam('eventID', 'NO-ID');
        const eventDetails = EventDetailsScreen.getEventDetailsByID(eventID);

        return (
            <View style={styles.container}>
                {/* <Image source={{uri: eventDetails.imageSrc}} style={{width: 400, height: 400}} /> */}
                {/* Start Implementing the row of the event description */}
                <View style={{flex: -1, height: 300, width: '100%',}}>
                    <EventDetailsRow leftIcon={''} contentHeader={'Titre'} contentText={eventDetails.title} style={{flex: 1, height: 200, width: 200}} />
                    <EventDetailsRow leftIcon={''} contentHeader={'Date et heure'} contentText={`${eventDetails.date} à ${eventDetails.time}`} style={{flex: 1, height: 200, width: 200}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
