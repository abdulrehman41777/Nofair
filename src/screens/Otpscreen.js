import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
import { useRoute } from "@react-navigation/native"
import colors from '../assets/colors/colors';
import getPercentageWidth from '../utils/CalculateWidth';
import fonts from '../assets/font/Font';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Otpscreen = ({ navigation }) => {

  const route = useRoute()
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChangeCode = (text, index) => {
    let updatedCode = [...verificationCode];
    updatedCode[index] = text;
    const combineCode = updatedCode.join("")
    setVerificationCode(combineCode);

    if (text !== '' && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleResendOTP = () => {
    Alert.alert("Resend OTP");
    // You can implement the resend OTP functionality here
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image style={styles.logo_image} source={require('../assets/logo.png')} />
        <Text style={styles.headingText}>Forgot Password</Text>
        <View style={styles.codeContainer}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              ref={(ref) => inputs.current[index] = ref}
              key={index}
              style={styles.codeInput}
              value={verificationCode[index]}
              onChangeText={(text) => handleChangeCode(text, index)}
              keyboardType="numeric"
              maxLength={1}
              placeholder='-'
              placeholderTextColor="gray"
              returnKeyType={index === 5 ? 'done' : 'next'}
              onSubmitEditing={() => {
                if (index === 5) {
                  // Submit or move to next screen when all fields are filled
                } else {
                  inputs.current[index + 1].focus(); // Shift focus to the next input field
                }
              }}
            />
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Otpscreen')} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resendButton} onPress={handleResendOTP}>
          <Text style={styles.resendButtonText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor:"white"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    borderRadius: 10,
    padding: 5,
    width: 40,
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    marginHorizontal: 8,
    color: colors.gray,
    fontFamily:fonts.fontHel
  },
  loginButton: {
    width: getPercentageWidth(90, windowWidth),
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
  resendButton: {
    width: getPercentageWidth(100, windowWidth),
    alignItems: "center",
    marginTop: 20,
  },
  resendButtonText: {
    fontWeight: "bold",
    color: colors.PrimaryColor,
    fontFamily:fonts.fontHel
  },
  logo_image: {
    height: windowHeight - 700,
    width: windowWidth - 200
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
});

export default Otpscreen;
