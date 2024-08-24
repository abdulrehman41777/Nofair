import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'
import fonts from '../../assets/font/Font'
import AntDesign from 'react-native-vector-icons/AntDesign';
import getPercentageWidth from '../../utils/CalculateWidth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo_image} source={require('../../assets/logo.png')} />
      </View>
      <TouchableOpacity
      // onPress={() => navigation.navigate('SettingTab', {
      //   screen: 'innerProfileSetting',
      // })}
      >
        <View style={styles.logoutIcon}>
          <AntDesign name="logout" color={colors.black} size={20} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor:"white"
  },
  Header_text: {
    color: colors.SecondaryColor,
    fontSize: 27,
    fontWeight: "700",
    fontFamily: fonts.fontHel
  },
  paragarph_text: {
    fontSize: 18,
    color: colors.gray,
    fontWeight: "500",
    fontFamily: fonts.fontHel
  },
  profile_image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    resizeMode: "contain",
    borderWidth: 3,
    borderColor: colors.SecondaryColor
  },
  logoutIcon: {
    width: 30,
    height: 30,
    borderRadius: 500,
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "gray",
  },
  logo_image: {
    height: windowHeight - 700,
    width: windowWidth - 280
  },


})