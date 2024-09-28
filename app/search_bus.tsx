// index.tsx
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card, DefaultTheme } from 'react-native-paper';
import styles from './styles';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#6200ee',
        accent: '#03dac4',
        background: '#f6f6f6',
        text: '#333',
    },
};

// Search Bus Screen Component
export default function SearchBusScreen() {
    const [lineNumber, setLineNumber] = React.useState('');
    interface BusLog {
        location_lat: number;
        location_lon: number;
        line_number: string;
        timestamp: string;
    }

    const [results, setResults] = React.useState<BusLog[] | null>(null);
    const [mapRegion, setMapRegion] = React.useState({
        latitude: 10.1,  // Default latitude, you can adjust this
        longitude: 9.84,  // Default longitude, you can adjust this
        latitudeDelta: 0.0922,  // Controls the zoom level
        longitudeDelta: 0.0421,
    });

    const searchBus = async () => {
        try {
            const response = await fetch(`http://192.168.1.43:8000/bus/${lineNumber}/logs`);
            const data = await response.json();
            setResults(data);

            if (data.length > 0) {
                setMapRegion({
                    latitude: data[0].location_lat,
                    longitude: data[0].location_lon,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.000421,
                });
            }
        } catch (error) {
            console.error('Error fetching bus logs:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Link href="/" asChild>
                <TouchableOpacity style={styles.homeButton}>
                    <Ionicons name="home-outline" size={30} color="#6200ee" />
                </TouchableOpacity>
            </Link>


            <Text style={styles.title}>Find Your Bus</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Bus Line Number"
                value={lineNumber}
                onChangeText={setLineNumber}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={searchBus}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>



            {results && results.length > 0 && (
                <Card style={styles.card}>
                    <MapView
                        style={styles.map}
                        region={mapRegion}
                        onRegionChangeComplete={(region) => setMapRegion(region)}
                        mapType="satellite"
                    >
                        {results.map((log, index) => (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: log.location_lat,
                                    longitude: log.location_lon,
                                }}
                                title={`Bus Line ${log.line_number}`}
                                description={`Timestamp: ${new Date(log.timestamp).toLocaleString()}`}
                            />
                        ))}
                    </MapView>
                </Card>
            )}
        </View>
    );
}