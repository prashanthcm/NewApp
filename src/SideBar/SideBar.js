import React from "react";
import { AppRegistry, Image, StatusBar, View, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";
import { Container, Content, Text, List, ListItem, transparent, active, Body, Button, Header,Icon, Left, Right, Card, CardItem } from "native-base";
import Profile from "../ProfileScreen/Profile";
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
      <Content>
        <Card style={{flex: 0}} >
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Image source={require('./../images/logo.jpg')} style = {styles.image} />
          </TouchableOpacity>
        <Text style={{fontSize:20,color:"black",marginLeft:22,fontWeight:"bold"}}>Prashanth CM</Text>
        <Text style={{fontSize:12,color:"black",marginLeft:32,fontWeight:"200"}}>@Pcm</Text>
        <CardItem>
          <Text style={{fontSize:20,marginLeft:3,fontWeight:"bold"}}>50 </Text>
          <Text style={{fontWeight:"100"}}>Followers </Text>
          <Text style={{fontSize:20,fontWeight:"bold"}}>120 </Text>
          <Text style={{fontWeight:"100"}}>Following</Text>          
        </CardItem>
        <CardItem style={{marginTop:10}} button onPress={() => this.props.navigation.navigate("Profile")}>
          <Icon name="ios-person-outline" />
          <Text>Profile</Text>
        </CardItem>
        <CardItem>
          <Icon name="ios-paper-outline" />
          <Text>Lists</Text>
        </CardItem>
        <CardItem>
          <Icon name="ios-flash-outline" />
          <Text>Moments</Text>
        </CardItem>
        <CardItem>
          <Icon name="ios-photos-outline" />
          <Text>Highlights</Text>
        </CardItem>
         </Card>
      <Card style={{marginTop:10}}>
      <CardItem>
            <Text>Settings and Privacy</Text>
        </CardItem>
      <CardItem>
        <Text>Help Centre</Text>
      </CardItem>
      <CardItem style={{marginTop:0}}>
        <Left>
          <Button transparent>
            <Icon  name="ios-moon-outline" />
          </Button>
        </Left>
          <Button transparent>
            <Icon name="ios-barcode-outline" />
          </Button>
      </CardItem>
      </Card>
      </Content>
    </Container>
    );
  }
}

var styles = StyleSheet.create({
  image: {
      borderRadius: 200,
      height: 80,
      width: 80,
      flex:0.8,
      marginLeft: 30,
      marginTop: 12,
      marginRight: 5,
    },
});