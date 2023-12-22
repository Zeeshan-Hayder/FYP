import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoPlayer from 'react-native-video-player'
const App = () => {
  return (
    <>  
    <VideoPlayer
    video={require('./assets/Welcome.mp4')}
    videoWidth={1600}
    videoHeight={900}
    autoplay={true}
/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
  
      <Text style={{ marginTop: 5, color: "white", fontSize: 50, fontWeight: "bold" }} >
        FYP
      </Text>
      <Text style={{ marginTop: 5, color: "white", fontSize: 50, fontWeight: "bold" }} >
        Introduction
      </Text>
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({})