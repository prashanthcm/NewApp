import React, { Component, } from 'react';
import { Container, Header, Title, Left, Icon, Input, searchBar, StyleProvider, Item, Right, iconCenter, active, Footer,onPress, FooterTab, Grid, Button, Body, Content,Text, Card, CardItem, Tabs, TabHeading, Tab } from "native-base";
import HomeScreen from "../HomeScreen/HomeScreen.js";
import getTheme from '../HomeScreen/native-base-theme/components';
import material from '../HomeScreen/native-base-theme/variables/material';
import { DrawerNavigator } from "react-navigation";
import {StyleSheet} from "react-native";
export default class SearchBar extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container style={{margin:10, backgroundColor:"white"}} >
          <Item >
          <Button rounded transparent onPress={() => this.props.navigation.goBack()} style={{paddingTop:2,paddingLeft:2}} >
            <Icon name='arrow-back' style={{marginTop:8}} onPress={() => this.props.navigation.goBack()} >
            </Icon>
          </Button>
            <Input rounded placeholder="Search Twitter" onSubmitEditing={this.handleEditComplete} />
          </Item>
        <Body>
        </Body>
        <Footer>
          <FooterTab  style={{backgroundColor:"white"}}>
              <Button transparent active style={{flex:0.2}} >
                <Text>All</Text>
              </Button>
              <Button  style={{flex:0.6}} >
                <Text style={{marginRight:80}}>Mentions</Text>
              </Button>
              <Button transparent style={{flex:0.2}} >
                <Icon name="md-settings" />
              </Button>
          </FooterTab>
        </Footer>
      </Container>
    </StyleProvider>
    );
  }
}