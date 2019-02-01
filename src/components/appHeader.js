import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (   

        <Header>
          <Body>
            <Image source={require('../img/logo.png')} style={{width: 400,height: 50,marginLeft:- 5}}/>     
          </Body>
        </Header>

    );
  }
}


module.export=AppHeader;
