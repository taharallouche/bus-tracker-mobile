// index.tsx
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';


// Search Bus Screen Component
export default function SearchBusScreen() {
    const [lineNumber, setLineNumber] = React.useState('');
    const [limit, setLimit] = React.useState('');
    const [results, setResults] = React.useState(null);

    const searchBus = async () => {

        // Only works from browser, from phone you get CORS error
        try {
            const response = await fetch(`http://192.168.1.43:8000/bus/${lineNumber}/logs?limit=${limit}`);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching bus logs:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Bus Line Number"
                value={lineNumber}
                onChangeText={setLineNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Limit (optional)"
                value={limit}
                onChangeText={setLimit}
                keyboardType="numeric"
            />
            <Button title="Search" onPress={searchBus} />
            {results && (
                <View style={styles.resultsContainer}>
                    <Text style={styles.resultsText}>Results:</Text>
                    <Text>{JSON.stringify(results)}</Text>
                </View>
            )}
        </View>
    );
};