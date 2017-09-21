// this component will be the header of the album App

// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component (name it same as the file name rule of thumb)
const Header = () => {
    //now we need to reference the style inside of the component
    // now we can use the word styles to apply the newly created textStyle object
    const { textStyle, viewStyle } = styles;

    //now set the style to the new text style
    return (
        // view tag to position blocks or apply styles of elements think of it as a div inhtml
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    );
};

//to style we place all stylings inside of the component
//we will create a new object that houses all the styles think of it as the css file
const styles = {
    //can chekc out react style documentation to know all the style properties
    viewStyle: {
        backgroundColor: '#FAEBD7'
    },

    //same structure as css except with camel case: ex:  text-style = textStyle
    textStyle: {
        fontSize: 20
    }
};

// make the component available to other parts of the AppRegistry
// (this replaces the render of the index.android.js)
// This component will be the child of the App component
// every child coponent uses an export
export default Header;
