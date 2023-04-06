import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import MyButton from './components/MyButton';

export default function App() {
  const f = () => {
    console.log('클릭');
    Alert.alert('Simple Button pressed');
  };

  const f2 = () => {
    console.log('클릭!');
  };
  const flag = true;
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Hello World~!</Text>
    <StatusBar style="auto" />
    {
      /*주석1*/ flag && <Button title="클릭" onPress={f} />
      //주석4  
    }
    <TextInput //주석2
      //주석3
      style={styles.input}
    />
    {/* <MyButton title="버튼1" a="1" b="2" c="3" onPress={f2} /> */}
    {/* <MyButton /> */}
    <MyButton title="버튼1" onPress="클릭" />
    <MyButton title="버튼2" a="11" b="22" c="33" onPress={f2} />
    <MyButton title="버튼3" a="111" b="222" c="333" onPress={f2} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});
