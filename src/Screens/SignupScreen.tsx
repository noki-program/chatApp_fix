import { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import firebase from "firebase";

//========================================================================================================
export function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const back = () => {
    navigation.goBack();
  };

  //Submitが押されたときにSign Up(登録処理)する関数
  const pressedSubmit = (email: string, password: string) => {
    //ここでFirebaseでの登録
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        //登録成功したらログイン画面に戻る
        Alert.alert("登録成功！", "サインインできるようになりました");
        back();
      })
      .catch((error) => {
        //エラーが返ってきたらその内容をアラートで表示
        console.log(error);
        Alert.alert("エラー", `${error}`);
      });
  };

  //========================================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.titleAndFieldView}>
          <Text style={styles.screenTitle}>Sign Up!</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={(email) => {
              setEmail(email);
            }}
            placeholder="  メールアドレスを入力"
            keyboardType="email-address"
            autoCapitalize="none"
            />
          <TextInput
            style={styles.inputField}
            onChangeText={(password) => {
              setPassword(password);
            }}
            placeholder="  パスワードを入力"
            keyboardType="visible-password"
            secureTextEntry={true}
            />
          <ExpoStatusBar style="auto" />
        </View>

        <View style={styles.includeButtons}>
          <Button 
            title="Submit" 
            onPress={() => { 
              pressedSubmit(email,password)
            }} 
          />
          
          <View style={styles.spacer}></View>
          <Button title="Back" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

//========================================================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleAndFieldView: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  screenTitle: {
    fontSize: 30,
    marginBottom: 50,
  },
  inputField: {
    width: "80%",
    marginBottom: 20,
    height: 35,
    backgroundColor: "lightgray",
  },
  includeButtons: {
    flex: 4,
    marginVertical: 10,
  },

  spacer: {
    height: 30,
  },
});
