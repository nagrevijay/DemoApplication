

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  //  Button
  ScrollView
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import Btn from '../../common/Button';

const About = (props: any) => {
  const handleNavigation = () => {
    props.navigation.navigate('Notification');
  }
  const [vehicles, setVehicles] = useState([]);
  const fetchVehicleHandler = async () => {
    console.log("Fetch is called")
    await fetch('https://swapi.dev/api/vehicles/').then(response => {
      return response.json();
    }).then((data) => {
      setVehicles(data.results);
    });
  }
  useEffect(() => {
    // handleVehiclesData();
    fetchVehicleHandler();
  }, []);
  const title = "Next";
  const color = '#2196F3';
  // const list = [
  //   {
  //     name: 'Amy Farha',
  //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  //     subtitle: 'Vice President'
  //   },
  //   {
  //     name: 'Chris Jackson',
  //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  //     subtitle: 'Vice Chairman'
  //   },
  // ]
  console.log("Vehicles", vehicles);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          {
            vehicles?.map((l, i) => (

              <ListItem key={i} bottomDivider>
                {/* <Avatar source={{ uri: l.avatar_url }} /> */}
                {/* <Divider inset={true} insetType="middle" />; */}
                <ListItem.Content>
                  <ListItem.Title>{l.cargo_capacity}</ListItem.Title>
                  <ListItem.Subtitle>{l.consumables}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }

        </View>
      </ScrollView>
      <View style={{ paddingVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Btn onPress={handleNavigation} title={title} color={color} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    paddingVertical: 10,
    padding: 10,
  },
  txtStyle: {
    fontFamily: 'Bold',
    fontSize: 35,
  },
  scrollView: {
    marginHorizontal: 20,
  },

});

export default About;
