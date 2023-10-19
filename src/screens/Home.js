import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import { SearchBar, Searchbar } from 'react-native-elements';


const Home = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([])
  const [visibleData, setVisibleData] = useState(10);
  const [search, setSearch] = useState([])


  const getDetails = async () => {

    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const json = await response.json();
      console.log('json', json)
      setData(json);
    }
    catch {
      console.log('error', Error)
    }
  }
  useEffect(() => {
    getDetails()
  }, [])



  const handlePress = (item) => {

    navigation.navigate('Details', { selectedData: item });
  }


  const loadMoreData = () => {

    if (visibleItems + 10 <= data.length) {
      setVisibleItems(visibleItems + 10);
    }
  };


  return (

    <View style={styles.container}>
      <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Country</Text>
      <Text style={{ padding: 20 }}>Hello Everyone</Text>
      <SearchBar
        inputStyle={{ backgroundColor: 'white' }}
        containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 15 }}
        placeholderTextColor={'#g5g5g5'}
        icon={{ type: 'material-community', color: '#86939e', name: 'share' }}
        clearIcon={{ type: 'material-community', color: '#86939e', name: 'share' }}
        round={true}
        placeholder="Search..."
        onChangeText={(text) => setSearch(text)}
        value={search}
      />

      <Text style={{ padding: 20 }}>Top picks for you</Text>

      <ScrollView horizontal={true}>

        <View>
          <FlatList
            horizontal={true}
            // data={data.slice(0, visibleData)}
            data={data}
            renderItem={({ item }) => (
              <View style={styles.flagandtext}>
                <TouchableOpacity
                  onPress={() => { handlePress(item) }}
                >
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: `${item.flags.png}`,
                    }}
                  />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'stretch', }}>
                  <Icon name="location-dot" color='black' size={20} style={styles.textCountry}/>
                  <Text style={styles.textCountry}>{item.name.common}</Text>
                </View>

              </View>
            )}

            style={{
              // backgroundColor: 'white',
              // justifyContent: 'center',
              // alignSelf: 'center'
            }}
          />
        </View>
      </ScrollView>

      <View>
      {visibleData < data.length && (
        <TouchableOpacity style={styles.refresh} onPress={()=>{loadMoreData}}>
          <Text style={{ color: 'white' }}>Refresh Data</Text>
        </TouchableOpacity>
              )}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#bab095'

  },
  tinyLogo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    // borderRadius: 25,
    padding: 10
  },
  textCountry: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignContent:'space-between',
    top: 30,
    // borderWidth:0.5,
    borderRadius: 25,
    padding: 5

  },
  flagandtext: {
    paddingLeft: 50,
    paddingVertical: 40,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  refresh: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 50
  },
})

export default Home;