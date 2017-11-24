import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';



export default class VrEvent961 extends React.Component {
    constructor(){
        super();
        this.state={
          image : 'starry-sky.jpg'
        }
    }
    get Teleport(){
        var data = [
        {
            image : "island-garden.jpg",
            text : "island"
        },
        {
            image : "winter-outdoor.jpg",
            text : "winter"
        },
        {
            image : "chess-world.jpg",
            text : "chess"
        }
        ]
        return(
        <View style={{flex : 1,flexDirection : 'row'}}>
            {data.map((data,key)=>{
                return(
                <View style={{flex : 1}} key={key} onEnter={()=>{
                    this.setState({image : data.image})}}>
                <Text
            style={{
                fontSize: 0.2,
                fontWeight: '400',
                margin : 0.2,
                padding : 0.2,
                color : "#fff",
                borderRadius : 0.1,
                margin : 0.2,
                textAlign: 'center',
                backgroundColor : '#aaa',
                textAlignVertical: 'center',
            }}>
            {data.text}
            </Text>
                </View>
                )
            })}
        </View>
        )
    }  
  render() {
      console.log(this.state);
    return (
      <View>
        <Pano source={asset(this.state.image)}/>
            <View style={{flex : 1,flexDirection : 'column',justifyContent:'center',transform: [{translate: [-2,0, -3]}]}}>
                {this.Teleport}
            </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VrEvent2017', () => VrEvent961);
