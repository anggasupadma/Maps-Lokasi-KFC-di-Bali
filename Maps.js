import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.360571,
          longitude: 114.629108
        },
        title: 'KFC Jembrana',
        subtitle: 'Jl. Ngurah Rai, Pendem, Kec. Jembrana, Kabupaten Jembrana, Bali 82218'
      },
      {
        key:2,
        latlng: {
          latitude:-8.112699,
          longitude:   115.091411
        },
        title: 'KFC Singaraja',
        subtitle: 'Jl. Ngurah Rai No. 78, Kelurahan Banjar Jawa, Kecamatan Buleleng, Banjar Jawa, Kec. Buleleng, Bali, 81115'
      },
      {
        key:3,
        latlng: {
          latitude: -8.552550,
          longitude: 115.132136
        },
        title: 'KFC Tabanan',
        subtitle: 'Jalan By Pass Ngurah rai, Banjar Anyar, Kediri, Tabanan, Banjar Anyar, Kediri, Kabupaten Tabanan, Bali 82121'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.637129,
          longitude: 115.185074
        },
        title: 'KFC Kebo Iwa ',
        subtitle: 'Jl. Gatot Subroto Barat No.356, Padangsambian Kaja, Denpasar Bar., Kota Denpasar, Bali 80117'
      },
      {
        key:5,
        latlng: {
          latitude:-8.635175,
          longitude: 115.223372
        },
        title: 'KFC Gatot Subroto Timur Bali',
        subtitle: 'Jl. Gatot Subroto Timur No. 100X, Kel. Tonja, Kec. Denpasar Utara, Tonja, Denpasar Utara, Depansar, Bali 80115'
      },
      {
        key:6,
        latlng: {
          latitude:-8.658735,
          longitude: 115.212314
        },
        title: 'KFC Darma',
        subtitle: 'Jalan Hasanuddin No.59, Pemecutan, Denpasar Barat, Pemecutan, Denpasar Bar., Kota Denpasar, Bali 80115'
      },
      {
        key:7,
        latlng: {
          latitude:-8.669897,
          longitude: 115.217279
        },
        title: 'KFC Matahari Duta Plaza',
        subtitle: 'MDS Duta Plaza Lantai Basement, Jalan Dewi Sartika, Dauh Puri Klod, Denpasar Bar., Kota Denpasar, Bali 80115'
      },
      {
        key:8,
        latlng: {
          latitude:-8.691911,
          longitude: 115.217154
        },
        title: 'KFC Ramayana Sesetan',
        subtitle: 'Jl. Raya Sesetan No.22, Sesetan, Denpasar Sel., Kota Denpasar, Bali 80115'
      },
      {
        key:9,
        latlng: {
          latitude:-8.704172,
          longitude: 115.220082
        },
        title: 'KFC Sesetan',
        subtitle: 'Jl. Raya Sesetan No.216, Sesetan, Denpasar Sel., Kota Denpasar, Bali 80223'
      },
      {
        key:10,
        latlng: {
          latitude:-8.721464,
          longitude: 115.180194
        },
        title: 'KFC Kuta Galae',
        subtitle: 'Jl. Raya Kuta No.105, Kuta, Kabupaten Badung, Bali 80361'
      },
      {
        key:11,
        latlng: {
          latitude:-8.722654,
          longitude: 115.171520
        },
        title: 'KFC Kuta Squear',
        subtitle: 'Kuta Square, Jl. Bakung Sari No.1 Blok C 1-2, Kuta, Kabupaten Badung, Bali 80115'
      },
      {
        key:12,
        latlng: {
          latitude:-8.782042,
          longitude: 115.179064
        },
        title: 'KFC By Pass Ngurah Rai',
        subtitle: 'Jalan By Pass Ngurah Rai No.2, Jimbaran, Kuta Selatan, Jimbaran, Kuta Sel., Kabupaten Badung, Bali 80115'
      },
      {
        key:13,
        latlng: {
          latitude:-8.796500,
          longitude: 115.218859
        },
        title: 'KFC Nusa Dua',
        subtitle: 'Jl. Bypass Ngurah Rai, Shop. Ctr Tragia, Benoa, Nusa Dua, Kabupaten Badung, Bali 80115'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Lokasi KFC Di BALI
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>AnggaSupadma@Copyright </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
