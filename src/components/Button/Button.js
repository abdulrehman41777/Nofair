import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import fonts from '../../assets/font/Font';

function Button({ name, onPress, isLoading, loadingName, icon, iconLeft, iconRight = false, mainStyle, textStyle, customWidth, customHeight }) {

    return (
        icon ?
            <TouchableOpacity style={mainStyle ? mainStyle : styles.ContainerIcon} onPress={isLoading ? null : onPress}>
                {
                    iconRight ?
                        iconRight && icon ?
                            icon :
                            <Entypo name="chevron-left" color={colors.white} size={30} />
                        : null}

                {isLoading ?
                    <Text style={textStyle ? textStyle : { color: colors.white, fontSize: 18, fontFamily:fonts.fontHel }}>{loadingName ? loadingName : "Loading..."}</Text>
                    :
                    <Text style={textStyle ? textStyle : { color: colors.white, fontSize: 18, fontFamily:fonts.fontHel }}>{name || "Button"}</Text>
                }
                {iconLeft ? iconLeft && icon ?
                    icon :
                    <Entypo name="chevron-left" color={colors.white} size={30} />
                    : null}
            </TouchableOpacity>
            :
            <TouchableOpacity style={[mainStyle ? mainStyle : styles.Container, { width: customWidth ? customWidth : 200, height: customHeight ? customHeight : 50 }]} onPress={isLoading ? null : onPress}>
                {isLoading ?
                    <Text style={textStyle ? textStyle : { color: colors.white, fontSize: 18, fontFamily:fonts.fontHel }}>{loadingName ? loadingName : "Loading..."}</Text>
                    :
                    <Text style={textStyle ? textStyle : { color: colors.white, fontSize: 18, fontFamily:fonts.fontHel }}>{name || "Button"}</Text>
                }
            </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.SecondaryColor,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 100,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ContainerIcon: {
        backgroundColor: colors.SecondaryColor,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 100,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 35,
    }
});

export default Button;