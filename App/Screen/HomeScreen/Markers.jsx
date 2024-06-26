import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Marker } from 'react-native-maps'
import Colors from '../../Utils/Colors'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext'

export default function Markers({index, place }) {
   
  const {selectedMarker,setSelectedMarker}=useContext(SelectMarkerContext);
  return place && (

    <Marker
      coordinate={{
        latitude: place.latitude,
        longitude: place.longitude
      }}

      onPress={()=>setSelectedMarker(index)}
    >
           
      {selectedMarker==index?
      <Image source={require('./../../../assets/images/marker-selected.png')}
      style={{ width: 60, height: 60 }}
    />
      :<Image source={require('./../../../assets/images/marker.png')}
          style={{ width: 60, height: 60 }}
        />}
     

    </Marker>
   
   
  )
}