import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Profile from "../ProfileScreen/Profile";
import SideBar from "../SideBar/SideBar.js";
import SearchBar from "../SearchBar/SearchBar.js";
import { DrawerNavigator } from "react-navigation";
import Hm from "../Tabs/Hm.js";
import Post from "../Tabs/Post";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchBar },
    Profile: { screen: Profile },
    Post : { screen: Post}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
