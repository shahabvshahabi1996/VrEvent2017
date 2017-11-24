import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  Sphere,
  Plane,
  Cylinder
} from 'react-vr';

class Shapes extends React.Component{
    render(){
        return(
        <View>
            <Box
                style={{
                    color : 'red',
                    transform:[{translate : [0,0,-10]},{rotateY:45}]
                }}
                wireframe={false}
                dimWidth={2}
                dimDepth={2}
                dimHeight={2}
            />
            <Sphere
                style={{
                    color : 'yellow',
                    transform:[{translate : [0,5,-15]},{rotateY:45}]
                }}
                wireframe={false}
                radius={0.5}
                widthSegments={20}
                heightSegments={12}
                texture={asset('Metal_grunge_001_COLOR.jpg')}
            />
            <Cylinder
                style={{
                        color : 'yellow',
                        transform:[{translate : [0,5,-15]},{rotateY:45}]
                    }}
                radiusTop={0.5}
                radiusBottom={0.5}
                dimHeight={2}
                segments={12}
            />
            <Cylinder
                style={{
                    color : 'yellow',
                    transform:[{translate : [-10,5,-15]},{rotateY:45}]
                }}
                radiusTop={0}
                radiusBottom={1}
                dimHeight={2}
                segments={12}
            />
            <Plane
                style={{
                    color : 'yellow',
                    transform:[{translate : [-5,5,-20]},{rotateY:30}]
                }}
                wireframe={false}
                dimWidth={10}
                dimHeight={10}
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
                <Shapes />
            </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VrEvent961', () => VrEvent961);
