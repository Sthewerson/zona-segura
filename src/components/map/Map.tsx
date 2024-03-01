import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, TouchableOpacity, Text, Linking, Alert } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";

import { styles } from "../../styles/styles"

interface CustomMarker {
  id: number;
  position: { latitude: number; longitude: number };
  title: string;
  description: string;
}

export default function Map() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [markers, setMarkers] = useState<CustomMarker[]>([]);

  async function requestLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Balanced,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      (response) => {
        setLocation(response);
      }
    );
  }, []);


  useEffect(() => {
    // Adicionar marcadores manualmente aqui, conforme necessário
    const cityMarkersData: CustomMarker[] = [
      {
        id: 1,
        position: {
          latitude: -10.2875, // Coordenadas do Bairro 1
          longitude: -36.5825,
        },
        title: 'Bairro 1',
        description: 'Informações sobre o Bairro 1',
      },
      {
        id: 2,
        position: {
          latitude: -10.2886944444, // Coordenadas do Bairro 2
          longitude: -36.5793055556,
        },
        title: 'Bairro 2',
        description: 'Informações sobre o Bairro 2',
      },
      {
        id: 3,
        position: {
          latitude: -10.2941388889, // Coordenadas do Bairro 3
          longitude: -36.5756666667,
        },
        title: 'Bairro 3',
        description: 'Informações sobre o Bairro 3',
      },
      {
        id: 4,
        position: {
          latitude: -10.2941111111, // Coordenadas do Bairro 4
          longitude: -36.5783888889,
        },
        title: 'Bairro 4',
        description: 'Informações sobre o Bairro 4',
      }
    ];

    setMarkers(cityMarkersData);
  }, []);

  const enviarMensagemSocorro = async () => {
    if (location) {
      const { latitude, longitude } = location.coords;
      const mensagem = "Socorro! Estou em perigo.";

      try {
        const numberWhatsApp = '+5582991014622'; // Substitua pelo número de telefone do WhatsApp que deseja enviar

        const linkMapa = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

        await Linking.openURL(`https://api.whatsapp.com/send?phone=${numberWhatsApp}&text=${encodeURIComponent(mensagem)}%0A${encodeURIComponent(linkMapa)}`);
      } catch (error) {
        console.error("Erro ao enviar mensagem de socorro:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.position}
              title={marker.title}
              description={marker.description}
              onPress={() =>
                Alert.alert(marker.title, marker.description, [
                  { text: "OK", onPress: () => console.log("OK Pressed") },
                ])
              }
            />
          ))}
        </MapView>
      )}
      <TouchableOpacity onPress={enviarMensagemSocorro} style={styles.botaoSOS}>
        <Text style={styles.textoBotaoSOS}>S.O.S</Text>
      </TouchableOpacity>
    </View>
  );
}
