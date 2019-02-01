import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, StyleProvider} from 'native-base';

import commonColor from './src/themes/variables/commonColor'
import getTheme from './src/themes/components'

import AppHeader from './src/components/appHeader'
import AppBody from './src/components/appBody'
import AppFooter from './src/components/appFooter'



export default class App extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(commonColor)}>
          <Container>
            <AppHeader />
            <AppBody />
            <AppFooter />
          </Container>
        </StyleProvider>
    );
  }
}


