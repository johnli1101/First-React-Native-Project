import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',   //push everything to the left side of container
        flexDirection: 'row',   //align everything in a row
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
