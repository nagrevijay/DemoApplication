
import * as React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Navigator from './src/app/screens/Navigator';



const App = () => {


  return (
    <>
      <Navigator/>  
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

// import { createStore } from 'redux'
// import reducer from './src/app/redux/rootReducer'

// const App = () => {
//   <List/>

// // const store = createStore(reducer)

// // {
// //   counter: 0,
// //   todos: []
// // }

// // store.dispatch({
// //   type: 'INCREMENT_COUNTER',
// //   text: 'Use Redux'
// // })
// // console.log(store.getState())
// }
// export default App;
// // {
// //   counter: 0,
// //   todos: [ 'Use Redux' ]
// // }