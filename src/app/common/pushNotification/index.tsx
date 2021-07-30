import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { LocalNotification } from './localNotification';
import Btn from '../Button';

const Notification = () => {
  const handleButtonPress = () => {
    LocalNotification()
  }

  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the notification</Text>
      <View style={{ marginTop: 20 }}>
        {/* <Button title={'Local Push Notification'} onPress={handleButtonPress} /> */}
        <Btn title={'Next'} onPress={handleButtonPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  }
})

export default Notification;