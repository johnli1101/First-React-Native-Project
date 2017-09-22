import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//since we already destructurized props we just add children to add another one
const Button = ({ whenPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        //onPress is something that comes with touchable opacity to listen for press
        <TouchableOpacity onPress={whenPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',    //this is tied to flex-box stretch to fill limits of container
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
