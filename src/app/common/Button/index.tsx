// import React from 'react';
// import { Button,StyleSheet } from 'react-native';

// const Btn = (props: any) => {
//     return (
//         <Button
//             onPress={props.onPress}
//             title={props.title}
//             color={props.color}
//         >
//         </Button>
//     );
// }

// const styles = StyleSheet.create({
//    btnStyle:{
//     height: 40,
//     width:160,
//     borderRadius:10,
//     backgroundColor : "yellow",
//     marginLeft :50,
//     marginRight:50,
//     marginTop :20
//    }
//   });
// export default Btn;


import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

 const Button=( props:any) =>{
  return (
    
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#841584'
      }}
      activeOpacity={0.7}
      onPress={props.onPress}
    >
      <Text
        style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
export default Button;