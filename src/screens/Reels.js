import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors/colors';
import getPercentageWidth from '../utils/CalculateWidth';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reels = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text>
                Reels
            </Text>
        </View>
    );
}

export default Reels;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },

});
