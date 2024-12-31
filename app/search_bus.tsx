import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect } from 'react';
import { Keyboard, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
    const [lineNumber, setLineNumber] = React.useState('');  // Initially empty
    const [busLines, setBusLines] = React.useState<string[]>([]); // State to store available bus lines
    const [results, setResults] = React.useState<any | null>(null);
    const [mapRegion, setMapRegion] = React.useState({
        latitude: 10.1,  // Default latitude
        longitude: 9.84,  // Default longitude
        latitudeDelta: 0.0922,  // Controls the zoom level
        longitudeDelta: 0.0421,
    });

    // Fetch available bus lines on component mount
    useEffect(() => {
        const fetchBusLines = async () => {
            try {
                const response = await fetch('http://192.168.1.43:8000/buses');
                const data = await response.json();
                setBusLines(data.map((bus: { line_number: string }) => bus.line_number)); // Assuming the response contains line_number
            } catch (error) {
                console.error('Error fetching bus lines:', error);
            }
        };

        fetchBusLines();
    }, []);

    const fetchBusResults = async (busLine: string) => {
        try {
            const response = await fetch(`http://192.168.1.43:8000/bus/${busLine}/logs`);
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

            if (data.length === 0) {
                alert('No bus logs found for the given line number.');
            }

            Keyboard.dismiss();
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

            {/* Render buttons for each bus line */}
            <ScrollView style={styles.buttonContainer}>
                {busLines.length > 0 ? (
                    busLines.map((line, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.busButton}
                            onPress={() => fetchBusResults(line)} // Fetch results when bus button is pressed
                        >
                            <Text style={styles.busButtonText}>Bus {line}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>Loading bus lines...</Text>
                )}
            </ScrollView>

            {results && results.length > 0 && (
                <Card style={styles.card}>
                    <MapView
                        style={styles.map}
                        region={mapRegion}
                        onRegionChangeComplete={(region) => setMapRegion(region)}
                        mapType="satellite"
                    >
                        {results.map((log: any, index: number) => (
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
