import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewStyle from './../../Utils/MapViewStyle.json'
import { UserLocationContext } from '../../Context/UserLocationContext'
import Markers from './Markers'
import MapViewDirections from 'react-native-maps-directions';
import GlobalApi from '../../Utils/GlobalApi'
const origin = {latitude: 41.3192126, longitude: 19.822084};
const destination = {latitude: 37.771707, longitude: -122.4053769};

export default function AppMapView({placeList}) {

  const {location,setLocation}=useContext(UserLocationContext);
//  console.log("--- ",location);
 
  return (
    <View>
        <MapView 
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
        region={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta :0.0522,
          longitudeDelta: 0.0421 
        }}
        >
     
          {/* User Marker  */}
         <Marker
            coordinate={{
              latitude:origin.latitude,
          longitude:origin.longitude,
            }}
          >
            <Image source={require('./../../../assets/images/car-marker.png')} 
              style={{width:60,height:60}}
            />
          </Marker>

            {/* Place Markers  */}
          {placeList&&placeList.map((item,index)=>(
            <Markers key={index}
            index={index}
            place={item}/>
          ))}
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });