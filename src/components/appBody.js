import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Card,CardItem,Body, Button, Icon, Content } from 'native-base';

import AppBodyData from './appBodyData'

export default class AppBody extends Component {
    render() {
        return (  
            <AppBodyData />
        );
  }
}

module.export=AppBody;
