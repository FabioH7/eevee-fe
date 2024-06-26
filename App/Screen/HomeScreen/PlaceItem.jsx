import { View, Text, Image, Dimensions, Pressable, ToastAndroid, Platform, Linking } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import GlobalApi from '../../Utils/GlobalApi';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore } from "firebase/firestore";
import { app } from '../../Utils/FirebaseConfig';
import { doc, setDoc,deleteDoc  } from "firebase/firestore";
import { useUser } from '@clerk/clerk-expo';
export default function PlaceItem({ place, isFav, markedFav }) {
  const { user } = useUser();
  const db = getFirestore(app);
  /**
   * Used to save Fav on Click of Heart Icon
   * @param {*} place Place Object
   */
  const onSetFav = async (place) => {
    await setDoc(doc(db, "ev-fav-place", (place.id).toString()), {
      place: place,
      email: user?.primaryEmailAddress?.emailAddress
    }
    );
    markedFav()

  }

  /**
   * Used to remove Fav from List
   * @param {*} placeId 
   */
  const onRemoveFav=async(placeId)=>{
    console.log(placeId)
     await deleteDoc(doc(db, "ev-fav-place", placeId.toString()));
     markedFav()
  }

  /**
   * On Direction Click Navigate to Google Map/Apple Map
   */
  const onDirectionClick = () => {
    const url = Platform.select({
      ios: `http://maps.apple.com/?ll=${place.latitude},${place.longitude}&q=${place.latitude},${place.longitude}`,
      android: `geo:${place.latitude},${place.longitude}?q=${place.latitude},${place.longitude}`,
    });
  
    if (url) {
      Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    } else {
      console.error('Platform not supported');
    }
  };
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        margin: 5,
        borderRadius: 10,
        width: Dimensions.get('screen').width * 0.9,
        marginHorizontal: 20
      }}
    >
      <LinearGradient
        colors={['transparent', '#ffffffff', '#ffffff']}
      >
      {!isFav?  <Pressable style={{
          position: 'absolute', right: 0,
          margin: 5
        }}
          onPress={() => onSetFav(place)}
        >
          <Ionicons name="heart-outline" size={30}
            color="white" />
        </Pressable>:
        <Pressable style={{
          position: 'absolute', right: 0,
          margin: 5
        }}
          onPress={() => onRemoveFav(place.id)}
        >
          <Ionicons name="heart-sharp" size={30}
            color="red" />
        </Pressable>}
        <Image source={{uri: place.url}}
          style={{
            width: '100%', borderRadius: 10,
            height: 140, zIndex: -1
          }}
        />
        <View style={{ padding: 15 }}>
          <Text numberOfLines={1} style={{
            fontSize: 23,
            fontFamily: 'outfit-medium'
          }}>{place.name}</Text>
          <View style={{ display: 'flex'}}>
          <Text style={{
            color: Colors.GRAY,
            fontFamily: 'outfit'
          }}>{place?.address}</Text>
          <Text style={{
            fontFamily: 'outfit'
          }}>Lowest price: {place?.lowest_price} at {place?.lowest_price_time}</Text>
          </View>
          <View style={{
            display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between', marginTop: 15
          }}>
            <View style={{
            }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, width: 150, justifyContent: 'space-between'}}>
              <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20,
                marginTop: 2
              }}>{place?.totalChargers}  Available</Text>
              <Image source={require("../../../assets/images/battery-bolt.png")} style={{width:20,height:20}}/>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, width: 150, justifyContent: 'space-between'}}>
              <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20,
                marginTop: 2
              }}>{place?.occupiedChargers} Occupied</Text>
              <Image source={require("../../../assets/images/occupied.png")} style={{width:20,height:20}}/>
              </View>
            </View>
            <Pressable 
            onPress={()=>onDirectionClick()}
            style={{
              padding: 12, backgroundColor: Colors.PRIMARY,
              borderRadius: 6, paddingHorizontal: 14
            }}>
              <FontAwesome name="location-arrow"
                size={25} color="white" />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}