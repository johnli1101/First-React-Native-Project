//code for android goes in here only

//import a library to help create a Component
// React library - knows how a component should behave / knows
//      how to take a bunch of ocmponents and make them work together
import React from 'react';

// React Native library - portal to the mobile device (aka rendering)
//      take components and place it on the screen and default core for components
// Import destructing to import the text tag in the components

import { Text, AppRegistry } from 'react-native';

//import header component (list the path to the file from the project root)
import Header from './src/components/header';

//no file gets access to global files in other javascript libraries in EA6
//  version of javascript so only imports to access them (think of c++ include
//  .h files)

// Create a Component
// each file can only have one component
//component - a widget that produces some text or shape that renders onto the
//        screen of our mobile device
//      components are javascript functions
const App = () => { //App component
    return (
        //this tells react to render some text to the device
        // this is dialect of javascript called JSX (similar to HTML)
        // follows the same semantics as HTML
        // turns jsx to javscript (basically a mask over function calls for simplicity purposes)
        // this is how to call the header component by making a self closing tag
        //  Since we don't need to put anyhting between the tags we just close it with /> 
        <Header />
    );
};

// Render it to the device
//Take the component and show it to the screen
//only the root component uses the app registry basically marking it as the root component
AppRegistry.registerComponent('new_project', () => App);
//need to register at least one component to return
//first argument is project name in this case new_project
// second argument is the name of the first component to render so in this case App
