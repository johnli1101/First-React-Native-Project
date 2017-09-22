import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//so we don't have to repeatily write out props.album.blah we can destructurize it
// so instead of passing (props) as the arguement we can just pass in {album}
// now we don't need to write props and we just write album.title album.image
// if we want to further clean it up we can specifiy destructurize in the object
// and specify specifically what we want to have in there such as title, artist, etc.
// so in the tags we just write out title and artist instead of album.title etc.
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;

    //same thing with the prop, we can desturize style so we don't have to write style.header
    const {
        thumbnailStyle,
        headerTextStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
        //try to split it up in components by containers and sections like this
        //two view tags to house the image and the title and name
        //NOTE: the on press button here is in not the same as the onPress in TouchableOpacity
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button whenPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

//we have to add in image style or else image renders with no width and height
const styles = {
    headerContentStyle: {
        flexDirection: 'column',    //set the placement to columns
        justifyContent: 'space-around'  //add equal amount of space around
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
