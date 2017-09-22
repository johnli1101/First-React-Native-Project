import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        //props.children will pass in anything in between the header tag and stick it
        //      in the children
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,    //rounded borders
        borderColor: '#ddd',
        borderBottomWidth: 0,   //hide the bottom border
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },   //only shadow top and bottom
        shadowOpacity: 0.1,     //light gray color
        shadowRadius: 2,    //corner of the shadow it will round it nicely
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;
