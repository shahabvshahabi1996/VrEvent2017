import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model
} from 'react-vr';

class Models extends React.Component{
    constructor(){
        super()
        this.state={
            text : "red"
        }
    }
    render(){
        return(
        <View>
            <Model
                style={{
                    color : 'yellow',
                    transform:[{translate : [-5,5,-20]},{rotateY:30}]
                }}
                source={{
                    obj: asset('lowpolymountains.obj'),
                    mtl: asset('lowpolymountains.mtl'),
                }}
            />

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
                <Models />
            </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VrEvent961', () => VrEvent961);
