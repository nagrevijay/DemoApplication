import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';
import Btn from '../../common/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
const Home = (props:any) => {

  // const [email, onChangeEmail] = React.useState("");
  // const [password, onChangePassword] = React.useState('');
  // const [formData, setForm] = React.useState({
  //   email: {
  //     value: "",
  //     valid: false,
  //     type: "textinput",
  //     rules: {
  //       isRequired: true,
  //       isEmail: true
  //     }
  //   },
  //   password: {
  //     value: "",
  //     valid: false,
  //     type: "textinput",
  //     rules: {
  //       isRequired: true,
  //       minLength: true
  //     }
  //   }
  // });
  // const handleLogin=()=>{
  //   console.log("Hi")
  // }

  // const handleChange = () => {
  //   setForm({ ...formData });
  //   console.log(formData.email);
  // };

  return (
    <View style={styles.container}>
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Login
      </Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          if (values.email === 'abc@gmail.com' && values.password === '12345678'){
            props.navigation.navigate('About');
          }
            console.log(values)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              placeholder='Email'
              value={values.email}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              placeholder='Password'
              value={values.password}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Btn onPress={handleSubmit} title="Submit" color="#2196F3" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  txtStyle: {
    fontFamily: 'Bold',
    fontSize: 35,
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    // paddingHorizontal: 32, marginBottom: 16, width: '100%'
  },
});
export default Home;
