import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppMapView from './AppMapView'
import Header from './Header'
import SearchBar from './SearchBar'
import { UserLocationContext } from '../../Context/UserLocationContext'
import GlobalApi from '../../Utils/GlobalApi'
import PlaceListView from './PlaceListView'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext'

export default function HomeScreen() {

  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList,setPlaceList]=useState([]);
  const [selectedMarker,setSelectedMarker]=useState(0);
  
  const GetNearByPlace = (data) => {
    return GlobalApi.NewNearByPlace(data);
  }

  useEffect(()=>{
    setPlaceList(GetNearByPlace(location));
  },[location])

  /**
   * Used to get Near by place using google place api
   */

  return (
    <SelectMarkerContext.Provider value={{selectedMarker,setSelectedMarker}}>
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar 
          onSearch={GetNearByPlace}
          searchedLocation={(location) => {
            setLocation(location)
            GetNearByPlace(location) 
          }
        }
          />
      </View>
      {!placeList?<ActivityIndicator size={'large'}/>
      : <AppMapView placeList={placeList}/>}
      <View style={styles.placeListContainer}>
        {placeList&&<PlaceListView placeList={placeList} />}
      </View>
    </View>
    </SelectMarkerContext.Provider>
  )
}
const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 20
  },
  placeListContainer:{
    position:'absolute',
    bottom:0,
    zIndex:10,
    width:'100%'
  }
})