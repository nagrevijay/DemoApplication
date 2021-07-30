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
import {  Text } from 'react-native';

 const TextComponent=( props:any) =>{
  return (
    
      <Text
        style={{ fontSize: 18, color: '#000', textTransform: 'uppercase' }}
      >
        {props.title}
      </Text>
  );
}
export default TextComponent;