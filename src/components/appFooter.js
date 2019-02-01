import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Footer, FooterTab, Button, Icon } from 'native-base';
export default class AppFooter extends Component {
  render() {
    return (
         <Footer>
          <FooterTab>
            <Button>
              <Icon name="egg" />
              <Text>Feed</Text>
            </Button>
            <Button>
              <Icon name="paper" />
              <Text>News</Text>
            </Button>
            <Button active>
              <Icon active name="navigate" />
              <Text>About</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

module.export=AppFooter;
