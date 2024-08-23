import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';
import fonts from '../../assets/font/Font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Dropdown = ({ onPress, Data, dropDownStyle, initialName, textStyle, dropDownBtn }) => {


    const dropdownStyle =  {
        width:windowWidth / 4.5,
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 10,
    }
    return (
        <SelectDropdown
            data={Data}
            onSelect={(selectedItem, index) => {
                onPress(selectedItem?._id);
            }}
            renderButton={(selectedItem, isOpen) => {
                return (
                    <View style={dropdownStyle}>

                        <Text style={textStyle ? textStyle : styles.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.name) || initialName}
                        </Text>
                        <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} style={dropDownBtn ? dropDownBtn : styles.dropdownButtonArrowStyle} />
                    </View>
                );
            }}
            renderItem={(item, index, isSelected) => {
                return (
                    <View
                        style={{
                            ...styles.dropdownItemStyle,
                            ...(isSelected && { backgroundColor: '#D2D9DF' }),
                        }}>
                        <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
                    </View>
                );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 100,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 90,
    },
    header: {
        position: 'absolute',
        top: 0,
        width:windowWidth ,
        height: 90,
        backgroundColor: colors.lightgray,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 16,
    },
    dropdownButtonStyle: {
        width: windowWidth,
        height: 50,
        backgroundColor: colors.black,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginVertical: 10,

    },
    dropdownButtonTxtStyle: {
        flex: 1,
        color: colors.black,
        fontFamily:fonts.fontHel
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: colors.lightgray,
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: windowWidth,
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: colors.black,
        fontFamily:fonts.fontHel
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
});