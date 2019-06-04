import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';

import EventCard from './components/event-card/EventCard';

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);

    this._openEventDetails = this._openEventDetails.bind(this);
  }

  state = {
    events: [
      {
        key: 'az0',
        title: "Retraite l'excellence académique",
        datetime: '19 avril 2019 à 19H00',
        town: 'Houlgate',
        imgUri: 'https://images.pexels.com/photos/1432697/pexels-photo-1432697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        key: 'az1',
        title: 'Retraite à Marseilles',
        datetime: '26 avril 2019 à 19H00',
        town: 'Marseilles',
        imgUri: 'https://images.pexels.com/photos/2347462/pexels-photo-2347462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        key: 'az2',
        title: 'Convention mondiale à Koume',
        datetime: 'décembre 2019 à 10H00',
        town: 'Koume',
        imgUri: 'https://images.pexels.com/photos/2355519/pexels-photo-2355519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        key: 'az3',
        title: 'Culte commun à Paris',
        datetime: '31 juin 2019 à 10H00',
        town: 'Paris',
        imgUri: 'https://images.pexels.com/photos/2156901/pexels-photo-2156901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ],
  };

  _openEventDetails(key) {
    // alert('Open details for ' + key)
  }

  render () {
    return (
      <FlatList
        style={styles.container}
        data={this.state.events}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={.85} onPress={() => this._openEventDetails(item.key)}>
            <EventCard key={item.key} data={item} />
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    display: 'flex',
    height: '100%',
    padding: 15,
    backgroundColor: '#EEEEEE',
  },
});
