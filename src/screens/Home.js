import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Home/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.userNameWrapper} >
        <Text style={styles.userName}>
          Hello, User
        </Text>
      </View>

      <View style={styles.iconContainer}>

        <TouchableOpacity style={styles.bgRecWrap}>
          <FontAwesome name="video-camera" size={80} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgRecWrap: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    borderRadius: 500,
    borderWidth: 1,
    borderColor: "gray",
    width: windowWidth - 100,
    height: windowHeight - 500,
  },
  userNameWrapper: {
    flex: 0.3,
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center"
  },
  userName: {
    fontSize: 28,
    color: colors.PrimaryColor,
    fontWeight: '800',
    paddingBottom: 30,
  }
});

export default Home;
