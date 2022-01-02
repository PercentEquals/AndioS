import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

function ParentCameraPage({route, navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync()
    route.params.setChosenFile(photo);
    navigation.pop();
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.2,
              position: 'absolute',
              alignSelf: 'flex-start',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons style={{marginLeft: 10, marginTop: 10}} name={ Platform.OS === 'ios' ? "ios-camera-reverse" : 'md-camera-reverse'} size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={_takePhoto}
            style={{flex: 1, alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ 
               borderWidth: 2,
               borderRadius:25,
               borderColor: 'white',
               height: 50,
               width:50,
               marginBottom: 10,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:25,
                 borderColor: 'white',
                 height: 40,
                 width:40,
                 backgroundColor: 'white'}} >
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default ParentCameraPage;