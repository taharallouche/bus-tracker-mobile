// index.tsx
import React from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';


// Search Bus Screen Component
export default function SearchBusScreen() {
    const [lineNumber, setLineNumber] = React.useState('');
    const [results, setResults] = React.useState(null);

    const searchBus = async () => {
        try {
            const response = await fetch(`http://192.168.1.43:8000/bus/${lineNumber}/logs`);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching bus logs:', error);
        }
    };

    class BusLog {
        line_number: string;
        location_lat: number;
        location_lon: number;
        timestamp: string;

        constructor(line_number: string, location_lat: number, location_lon: number, timestamp: string) {
            this.line_number = line_number;
            this.location_lat = location_lat;
            this.location_lon = location_lon;
            this.timestamp = timestamp;
        }
    }

    const RenderItem = ({ item }: { item: BusLog }) => (
        <View style={styles.row}>
            <Text style={styles.latLonCell}>{item.location_lat}</Text>
            <Text style={styles.latLonCell}>{item.location_lon}</Text>
            <Text style={styles.timestampCell}>{new Date(item.timestamp).toLocaleString()}</Text>
        </View>
    );

    const renderItem = (props: { item: BusLog }) => <RenderItem {...props} />;

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Search Bus Logs</Text>
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
            </View>
            {results && (
                <View style={styles.resultsContainer}>
                    <Text style={styles.resultsText}>Results:</Text>
                    <View style={styles.headerRow}>
                        <Text style={styles.latLonHeader}>Latitude</Text>
                        <Text style={styles.latLonHeader}>Longitude</Text>
                        <Text style={styles.timestampHeader}>Timestamp</Text>
                    </View>
                    <FlatList
                        data={results}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.timestamp}
                    />
                </View>
            )}
        </View>
    );
}