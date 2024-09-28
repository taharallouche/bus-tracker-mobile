import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import styles from './styles';

// Custom theme for react-native-paper
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



// Main App component
export default function App() {


  return (
    <LinearGradient
      colors={['#6200ee', '#03dac4']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeText}>عبّي الوسط!</Text>
        <Text style={styles.descriptionText}>
          Find your bus in real-time with ease.
        </Text>
        <Link href="/search_bus" asChild style={styles.button}>
          <Text style={styles.buttonText}>Search Bus</Text>
        </Link>
      </View>
    </LinearGradient>
  );
}
