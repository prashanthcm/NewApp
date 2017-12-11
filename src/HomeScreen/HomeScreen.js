import React from "react";
import { StatusBar, StyleSheet, Image, TouchableOpacity, flex, View, props, backgroundColor} from "react-native";
import SearchBar from "../SearchBar/SearchBar.js";
import Hm from "../Tabs/Hm.js";
import Post from "../Tabs/Post";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material.js';
import Notifications from "../Tabs/Notifiactions";
import Mail from "../Tabs/Mail";
import { Container, Header, Title, Left, Fab, Icon, Right, StyleProvider, iconCenter, active, Footer,onPress, FooterTab, Grid, Button, Body, Content,Text, Card, CardItem, Tabs, TabHeading, Tab } from "native-base";
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText:"Imad App"
    };
  }
  onValueChange = (value)=> {
    this.setState({
      titleText:value
    });
  }
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container style={{backgroundColor:"white"}}>
        <Header style={{backgroundColor:"white"}} hasTabs >
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Image source={require('../images/logo.jpg')} style = {styles.image} />
            </TouchableOpacity>
          </Left>
          <Body style={{ flex: 1 }}>
            <Text style={styles.titleText} >{this.state.titleText}</Text>
          </Body>
        </Header>
        <Tabs initialPage={0}  >
        <Tab heading={ <TabHeading ><Icon name="md-home" /></TabHeading>} >
            <Hm />
        </Tab>
        <Tab  heading={ <TabHeading><Icon name="md-search"/></TabHeading>} style={{padding:10}} >
            <Button block info rounded onPress={() => this.props.navigation.navigate("Search")} >
              <Icon name='search' />
              <Text>Search Twitter</Text>
            </Button>
        </Tab>
        <Tab heading={ <TabHeading><Icon name="ios-notifications" /></TabHeading>}>
            < Notifications />
        </Tab>
        <Tab heading={ <TabHeading><Icon name="md-mail"/></TabHeading>}>
            < Mail />
        </Tab>
        </Tabs>
        <Footer>
          <FooterTab  style={{backgroundColor:"white"}}>
              <Button active style={{flex:0.2}} >
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
        <Fab onPress={() => this.props.navigation.navigate("Post")}
            style={{ marginBottom: 30 , backgroundColor:"blue"}}
            position="bottomRight"
            >
            <Icon name="ios-create" />
            </Fab>
      </Container>
    </StyleProvider>
    );
  }
}

var styles = StyleSheet.create({
  titleText: {
      fontSize: 25,
      paddingRight:35,
      color:"blue"
    },
  image: {
      borderRadius: 200,
      height: 45,
      width:40,
      flex:0.9,
      marginLeft: 3,
      marginTop: 7,
      marginRight: 5,
    },
    footertext: {
      fontSize: 12,
      color:"black"
    },
});