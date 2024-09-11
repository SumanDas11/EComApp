import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

const ButtonComp = ({
    btnText,
    btnStyle = {},
    onClick = () => { }
}) => {
    return (
        <Pressable
            onPress={onClick}
            style={{ ...styles.btnStyle, ...btnStyle }}>
            <Text style={styles.btnTextStyle}>{btnText}</Text>
        </Pressable>
    )
}

export default ButtonComp

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: colors.themeColor,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
})