import React from "react";
import { AppRegistry, Alert } from "react-native";
import { StatusBar, StyleSheet, Image, TouchableOpacity, flex, View, props, backgroundColor} from "react-native";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";
import { StackNavigator } from "react-navigation";
import HomeScreen from "../HomeScreen/HomeScreen.js";
import { DrawerNavigator } from "react-navigation";
export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"white"}} hasTabs >
          <Left>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Image source={require('./../images/logo.jpg')} style = {styles.image} />
            </TouchableOpacity>
          </Left>
          <Body style={{ flex: 1 }}>
            <Text style={styles.titleText} >Profile</Text>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
            </CardItem>
          </Card>
          <Button full info rounded onPress={() => this.props.navigation.navigate("Home")} >
              <Icon name='home' />
              <Text>Home</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}
var styles = StyleSheet.create({
  titleText: {
      fontSize: 25,
      paddingRight:35,
      color:"#41BDE1"
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