import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
import { Container, Card,CardItem,Body, Button, Icon, Content, Thumbnail } from 'native-base';


export default class AppBodyData extends Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    getData () {
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson.movies,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }
        componentDidMount(){
        this.getData();
    }  
    render(){
        return (  
            <Content>
            <Card>
                <CardItem>
                    <Body>
                        <Thumbnail source={require('../img/ben.jpg')} style={{width:100,height:150,marginTop:20}} />
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                            keyExtractor={({id}, index) => id}
                        />
                    </Body>
                </CardItem>
              </Card>
            </Content> 
        );
    }

}
module.export = AppBodyData;