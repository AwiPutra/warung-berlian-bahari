import {React, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

function Login() {
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  function _buttonLogin() {
    fetch('http://192.168.209.114/WARUNG_BAHARI-API-FLIGHTPHP/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: nama,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (nama_role == 'kasir') {
          console.log('kasir');
        } else if (data && data.nama_role == 'admin') {
          console.log('admin');
        } else {
          console.log(data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Login</Text>
        <Image source={require('../assets/img/login.png')} />
        <View style={styles.containerInputLogin}>
          <TextInput
            placeholder="username"
            onChangeText={text => setNama(text)}
            name="nama"
            style={styles.textInputLogin}
          />
        </View>
        <View style={styles.containerInputLogin}>
          <TextInput
            placeholder="password"
            onChangeText={text => setPassword(text)}
            name="password"
            style={styles.textInputLogin}
          />
        </View>
        <Pressable style={styles.buttonLogin} onPress={_buttonLogin}>
          <Text style={styles.textLogin}>Masuk Cuy</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textHeader: {
    fontSize: 36,
    color: '#2A9D00',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  containerInputLogin: {
    justifyContent: 'center',
    backgroundColor: '#F4EEA9',
    padding: 10,
    marginTop: 15,
    borderRadius: 6,
    width: 280,
  },
  textInputLogin: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 6,
    fontSize: 16,
    paddingStart: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#064635',
    marginTop: 20,
    borderRadius: 6,
  },
  textLogin: {
    fontSize: 30,
    color: '#F4EEA9',
    fontWeight: 'bold',
  },
});

export default Login;
