import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, Item, CardItem, cardBody, Title, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Notifications extends Component {
  render() {
    return (
        <Container style={{backgroundColor:"white"}}>
            <Item style={{marginTop:5}}>
                <Text style={{color:"#41BDE1", fontSize:20, fontWeight:"bold"}}>
                    Your Notifications will be shown here
                </Text>
            </Item>
        </Container>
    );
}
}