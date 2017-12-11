import React, { Component } from 'react';
import { Container, Header, Content, Text, Left, Title, Body, Button, iconLeft, Icon, Item, Input } from 'native-base';
import { StatusBar, StyleSheet, Image, TouchableOpacity, flex, View, props, backgroundColor} from "react-native";
export default class Post extends Component {
  render() {
    return (
      <Container style={{backgroundColor:"white"}}>
        <Item style={{height:50}}>
          <Button rounded transparent onPress={() => this.props.navigation.goBack()} style={{paddingTop:2,paddingLeft:2}} >
            <Icon name='arrow-back' style={{marginTop:14}} onSubmitEditing={this.handleEditComplete} >
            </Icon>
          </Button>
          <Title style={{color:"green", alignContent:"center", marginTop:10}}>
                Update status
            </Title>
        </Item>
        <Content>
          <Item rounded>
            <Input placeholder='Write Something'/>
          </Item>
        </Content>
      </Container>
    );
  }
}