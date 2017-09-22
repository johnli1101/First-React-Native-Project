import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';    //importing albumDetail to use in here

//This is a class component that is used for dynamic sources of data and any
//  data that will change and knows when it gets rendered to the device

class AlbumList extends Component {
    //one way of initializing a state (creating a property called state)
    //when our component first renders it will have access to this.state.albums for empty state
    state = { albums: [] };


    //anytime component rendered to the screen this function will be called (constructor)
    componentWillMount() {
        //this promise basically calls .then if the request completes fine
        //the response.data is from google chrome debugger response comes with data that
        //   contains json
        //we are then update albums with the response.data not empty state anymore
        //setstate comes with the component class to set the state object
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        //map is an array helper called on arrays (albums is an array)
        // so each album will be translated to a text tag (album.title is part of the json)
        //to avoid warning we add a key for consistency to the album title
        // key needs to be unique so that it can keep track of what it renders
        //now need to pass prop down to child by creating prop name album that contains album json
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
