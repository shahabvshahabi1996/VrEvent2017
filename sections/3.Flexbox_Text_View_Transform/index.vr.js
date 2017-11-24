import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class VrEvent961 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}/>
        <View style={{flex : 1,flexDirection : 'row',justifyContent:'center',transform: [{translate: [-1.8, 0, -3]}]}}>
          <View style={{flex : 1}}>
            <Text
              style={{
                backgroundColor: 'red',
                fontSize: 0.2,
                fontWeight: '400',
                paddingLeft: 0.2,
                paddingRight: 0.2,
                margin : 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              red
            </Text>
          </View>
          <View style={{flex : 1}}>
            <Text
              style={{
                backgroundColor: 'green',
                fontSize: 0.2,
                fontWeight: '400',
                paddingLeft: 0.2,
                paddingRight: 0.2,
                margin : 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              green
            </Text>
          </View>
          <View style={{flex : 1}}>
            <Text
              style={{
                backgroundColor: 'blue',
                fontSize: 0.2,
                fontWeight: '400',
                paddingLeft: 0.2,
                paddingRight: 0.2,
                margin : 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
                blue
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VrEvent961', () => VrEvent961);
