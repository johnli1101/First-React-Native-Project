// this component will be the header of the album App

// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component (name it same as the file name rule of thumb)
//This ia a functional component - ONLY NEED TO DISPLAY STUFF TO THE USER
const Header = (props) => { //the props argument is getting the headerText from index.js
    //now we need to reference the style inside of the component
    // now we can use the word styles to apply the newly created textStyle object
    const { textStyle, viewStyle } = styles;

    //now set the style to the new text style
    return (
        // view tag to position blocks or apply styles of elements think of it as a div inhtml
        //when using javascript variables in jsx need curly braces
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
        </View>
    );
};

//to style we place all stylings inside of the component
//we will create a new object that houses all the styles think of it as the css file
const styles = {
    //can chekc out react style documentation to know all the style properties
    //flexbox - system of positioning elements within a container
    // ex.) how to position a text box within a view
    viewStyle: {
        backgroundColor: '#FAEBD7',
        justifyContent: 'center',   //moves in vertically
        alignItems: 'center',   //moves in horizontally
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },    //size of the shadow
        shadowOpacity: 0.2,  //darkness of the shadow
        elevation: 2,    //for android only need to set the elevation for shadow to show
        position: 'relative'
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
