/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   StyleSheet,
   Text,
   View,
   FlatList,
   TouchableOpacity
   
 } from 'react-native';
 
 
 
 const VehicleList = (props:any) => {
   return (
     <View style={styles.container}>
      <Text>{props.name}</Text>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
   txtStyle: {
     fontFamily: 'Bold',
     fontSize: 35,
   }
 
 });
 
 export default VehicleList;
 