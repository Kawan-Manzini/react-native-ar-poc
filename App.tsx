import { ViroTrackingStateConstants, ViroARScene, ViroText, ViroARSceneNavigator  } from '@viro-community/react-viro';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const HelloWorldSceneAr = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state: any, reason: any){
    console.log('guncelleme', state, reason);
    if(state === ViroTrackingStateConstants.TRACKING_NORMAL){
      setText('Hello World!');
    } else if(state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE){
      //Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
      text={text}
      scale={[0.5, 0.5, 0.5]}
      position={[0,0, -1]}
      style={styles.helloWorldTextStyle}
      >
      </ViroText>
    </ViroARScene>
  )
}

export default () => {
  return (
    <ViroARSceneNavigator
    autofocus={true}
    initialScene={{
      scene: HelloWorldSceneAr,
    }} 
    style={styles.f1}/>
  );
}

const styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
