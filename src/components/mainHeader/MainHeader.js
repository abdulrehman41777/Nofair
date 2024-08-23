import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors';
import fonts from '../../assets/font/Font';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MainHeader({ isSearch, navigation, inputStyle }) {
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.backBTN} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" color={colors.black} size={15} />
            </TouchableOpacity>
            {isSearch &&
                <View style={styles.inputWrapper}>
                    <AntDesign name="search1" color="#4D4D4D" size={20} />
                    <TextInput style={inputStyle ? inputStyle : styles.inputField} placeholder='Search' placeholderTextColor={colors.gray} />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
        backgroundColor: "transparent",
        width: 100,
        position: "absolute",
        zIndex: 1000,
    },
    backBTN: {
        padding: 10,
        borderColor: colors.black,
        borderWidth: 2,
        borderRadius: 200,
        backgroundColor: colors.white
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "start",
        backgroundColor: colors.lightgray,
        borderRadius: 200,
        paddingHorizontal: 10,
        gap: 10,
        borderColor: colors.SecondaryColor,
        borderWidth: 2,
        width: windowWidth - 100,
        height: 40
    },
    inputField: {
        width: windowWidth / 1.5,
        fontSize: 10,
        height: 40,
        fontFamily: fonts.fontHel
    },
});

export default MainHeader;