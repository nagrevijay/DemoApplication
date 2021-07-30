
import  React  from 'react';
// import fetchData from '../../services/api'

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

const List = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const fetchVehicleHandler = async () => {
//     console.log("Fetch is called")
//     await fetch('https://swapi.dev/api/vehicles/').then(response => {
//       return response.json();
//     }).then((data) => {
//       setVehicles(data.results);
//     });
//   }
//   useEffect(() => {
//     // handleVehiclesData();
//     fetchVehicleHandler();
//   },[]);
  // useEffect(() => {
  //   fetchData().then(response => {
  //     // const vehiclesList =setVehicles(response);
  //     // console.log("Vehicle List",vehiclesList);
  //     console.log("Vehicle List",response);
  //     setVehicles(response);
  //   })
  // }, [])
  // const handleList=()=>{
  //   fetchData().then(response => {
  //     // const vehiclesList =setVehicles(response);
  //     // console.log("Vehicle List",vehiclesList);
  //     console.log("Vehicle List",response);
  //     setVehicles(response);
  //   })
  // }

  // const handleDisplayVehicleList = () => {

  //   {
  //     <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
  //       <FlatList
  //         data={vehicles}
  //         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
  //       />
  //     </View>
  //   }

  // }
  // console.log("Vehicles", vehicles);

  return (
    <View style={styles.container}>
      <TouchableOpacity ><Text>Show List</Text></TouchableOpacity>
      {
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center'
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

export default List;
