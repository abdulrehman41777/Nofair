import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors/colors';
import getPercentageWidth from '../utils/CalculateWidth';
import fonts from '../assets/font/Font';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgotPassword = ({ navigation }) => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const Forgotpass_navigation = () => {
    navigation.navigate("forgotpassword")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo_image} source={require('../assets/logo.png')} />
      <Text style={styles.headingText}>Forgot Password</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <AntDesign name="mail" size={24} color={colors.black} style={styles.icon} />
          <TextInput style={styles.inputField} placeholder='Email' />
        </View>

      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Otpscreen')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Send OTP</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={{color:colors.gray, fontFamily:fonts.fontHel}}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  headingText: {
    fontSize: 25,
    paddingHorizontal: 80,
    textAlign: 'center',
    fontWeight: '700',
    color: colors.black,
    marginBottom: 80,
    fontFamily:fonts.fontHel
  },
  inputContainer: {
    width: getPercentageWidth(100, windowWidth),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputField: {
    flex: 1,
    fontFamily:fonts.fontHel
  },
  icon: {
    marginRight: 10,
  },
  passwordIcon: {
    marginLeft: 10,
  },
  loginButton: {
    width: getPercentageWidth(100, windowWidth),
    backgroundColor: colors.PrimaryColor,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:fonts.fontHel
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerLink: {
    marginLeft: 5,
    color: colors.PrimaryColor,
    fontWeight: 'bold',
    fontFamily:fonts.fontHel
  },
  logo_image: {
    height: windowHeight - 700,
    width: windowWidth - 200
  },
  Forgot_text: {
    alignItems: "flex-end",
    width: getPercentageWidth(100, windowWidth)
  },
  forgot_text_p: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.PrimaryColor,
  }
});
