import { View, Text, Dimensions } from 'react-native'
import React from 'react'
// import MapView from 'react-native-maps'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";


export default function GoogleMapView() {
  return (
    <View style={{ borderRadius: 20, overflow: "hidden" }}>
      {/* <Text> GoogleMapView </Text> */}
      <MapView 
        style={{
          width: Dimensions.get("screen").width * 0.89,
          height: Dimensions.get("screen").height * 0.23,
              }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}

      >

      </MapView>
    </View>
  )
}