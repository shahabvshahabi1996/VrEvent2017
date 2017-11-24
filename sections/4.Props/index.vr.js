import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class Todo extends React.Component{
    render(){
        return(
        <View style={{flex : 1}}>
            <Text
            style={{
                fontSize: 0.2,
                fontWeight: '400',
                margin : 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
            }}>
            Todo : {this.props.text}
            </Text>
        </View>
        )
    }
}

export default class VrEvent961 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
            <View style={{flex : 1,flexDirection : 'column',justifyContent:'center',transform: [{translate: [-1, 1, -3]}]}}>
                <Todo text={"Washing Dishes"}/>
                <Todo text={"Do Projects"}/>
                <Todo text={"Do home works"}/>
            </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VrEvent961', () => VrEvent961);
