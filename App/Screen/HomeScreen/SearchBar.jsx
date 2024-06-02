import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function SearchBar({ searchedLocation }) {
  const [input, setInput] = useState('');

  const handleInputChange = (text) => {
    setInput(text);
    searchedLocation(text);
  };

  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 15,
      paddingHorizontal: 5,
      backgroundColor: Colors.WHITE,
      borderRadius: 6,
      alignItems: 'center'
    }}>
      <Ionicons
        name="location-sharp"
        size={24}
        color={Colors.GRAY}
        style={{ paddingTop: 10 }}
      />
      <TextInput
        style={{
          flex: 1,
          marginLeft: 10,
          height: 40,
          borderColor: Colors.GRAY,
          borderWidth: 1,
          borderRadius: 6,
          paddingHorizontal: 10
        }}
        placeholder="Search EV Charging Station"
        value={input}
        onChangeText={handleInputChange}
      />
    </View>
  );
}
