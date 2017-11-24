import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            text : "red"
        }
    }
    render(){
        return(
        <View style={{flex : 1}} onEnter={()=>{
                this.setState({text : "green"})
            }}
            onExit={()=>{
                this.setState({text : "red"})
            }}
            >
            <Text
            style={{
                fontSize: 0.2,
                fontWeight: '400',
                margin : 0.2,
                padding : 0.2,
                color : "#fff",
                borderRadius : 0.1,
                textAlign: 'center',
                backgroundColor : this.state.text,
                layoutOrigin:[0.5,0.5],
                textAlignVertical: 'center',
            }}>
            {this.state.text}
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
            <View style={{flex : 1,flexDirection : 'column',justifyContent:'center',transform: [{translate: [0,0, -3]}]}}>
                <Todo text={"Washing Dishes"}/>
            </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VrEvent961', () => VrEvent961);
