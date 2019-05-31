import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image, Platform, Button } from 'react-native'

import  EventDetailsRow from './EventDetailsRow'
import RippleButton from '../../components/RippleButton'

export default class EventDetailsScreen extends React.Component {

    static getEventDetailsByID(eventID) {
        let eventDetails = null;

        // Check if the ID is consistent and the event exists
        // if (eventID === 'NO-ID') {
        //     return null;
        // }

        //TODO: Query the event details using REDUX
        eventDetails = {
            imageSrc: "https://images.pexels.com/photos/2333750/pexels-photo-2333750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            title: "Retraite sur l'excellence académique",
            date: "19 avril 2019",
            time: "19h00",
            address: "8 Avenue de la Valeuse ",
            city: "Hérouville Saint-Clair",
            zipCode: "14200",
            description: "Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia simul et feritas, et alioqui coalito more in ordinarias dignitates asperum semper et saevum, ut satisfaceret atque monstraret, quam ob causam annonae convectio sit impedita. Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia simul et feritas, et alioqui coalito more in ordinarias dignitates asperum semper et saevum, ut satisfaceret atque monstraret, quam ob causam annonae convectio sit impedita.Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia simul et feritas, et alioqui coalito more in ordinarias dignitates asperum semper et saevum, ut satisfaceret atque monstraret, quam ob causam annonae convectio sit impedita. Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia simul et feritas, et alioqui coalito more in ordinarias dignitates asperum semper et saevum, ut satisfaceret atque monstraret, quam ob causam annonae convectio sit impedita.",
        };

        return eventDetails;
    }


    static navigationOptions = ({ navigation }) => {
        const iconPrefix = {ios: 'ios', android: 'md',}[Platform.OS];
        return {
            // headerTitle: <LogoTitle />,
            headerTransparent: true,
            headerRight: (
                <View style={styles.headerRight}>
                    <RippleButton name={`${iconPrefix}-person-add`} color='#424242' />
                    <RippleButton name={`${iconPrefix}-pin`} color='#424242' />
                    <RippleButton name={`${iconPrefix}-share`} color='#424242' />
                </View>
            ),
        };
    };
    

    render() {
        // const {navigation} = this.props;
        const eventID = this.props.navigation.getParam('eventID', 'NO-ID');
        const eventDetails = EventDetailsScreen.getEventDetailsByID(eventID);
        const iconPrefix = {ios: 'ios', android: 'md',}[Platform.OS];

        // Return an empty JSX if the detail object is null
        if(!eventDetails) {
            return (
                <View>
                    <Text style={{color: 'red', alignSelf: 'center',}}>[ERREUR]:{"\n"}L'évènement que vous recherchez n'existe pas!</Text>
                </View>
            );
        }

        // Build the event detail page normally
        return (
            <ScrollView>
                <Image source={{uri: eventDetails.imageSrc}} style={{width: '100%', height: 300}} />
                <EventDetailsRow data={{leftIconName: `${iconPrefix}-share`, contentHeader: 'Titre', contentText: eventDetails.title,}} />
                <EventDetailsRow data={{leftIconName: `${iconPrefix}-time`, contentHeader: 'Date et heure', contentText: `${eventDetails.date} à ${eventDetails.time}`,}} />
                <EventDetailsRow data={{leftIconName: `${iconPrefix}-pin`, contentHeader: 'Adresse et itinéraire', contentText: `${eventDetails.address}`, rightIconName: `${iconPrefix}-map`,}} />
                <EventDetailsRow data={{leftIconName: `${iconPrefix}-paper`, contentHeader: 'Description', contentText: `${eventDetails.description}`,}} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerRight: {
        flexDirection: 'row',
        flex: 1,
    },
  });
