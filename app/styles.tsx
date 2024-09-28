import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    welcomeText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#007FFF', // Darker Teal/Aqua color for the text
        textAlign: 'center',
        marginBottom: 20,
        textShadowColor: '#5B3F8D', // Dark Purple shadow
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    descriptionText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    formContainer: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#2C3E50', // Darker color for contrast
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 16,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    homeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        padding: 10,
        elevation: 5, // For shadow on Android
        shadowColor: '#000', // For shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    resultsContainer: {
        marginTop: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 10,
    },
    resultsText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#4CAF50',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginBottom: 6,
    },
    lineHeader: {
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 4,
    },
    latLonHeader: {
        flex: 2,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 8, // Increased padding for better spacing
    },
    timestampHeader: {
        flex: 2,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 8,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginVertical: 2,
        borderRadius: 8,
        elevation: 1,
    },
    lineCell: {
        flex: 1,
        textAlign: 'center',
        color: '#333',
        fontSize: 14,
        paddingHorizontal: 4,
    },
    latLonCell: {
        flex: 2,
        textAlign: 'center',
        color: '#333',
        fontSize: 14,
        paddingHorizontal: 8, // Increased padding for better spacing
    },
    timestampCell: {
        flex: 2,
        textAlign: 'center',
        color: '#333',
        fontSize: 14,
        paddingHorizontal: 8,
    },
    map: {
        width: '100%',
        height: 400,  // You can adjust this based on your layout
        borderRadius: 1,
    },
    card: {
        width: '90%',
        borderRadius: 15,
        marginTop: 20,
        elevation: 5,  // Adds shadow for Android
    }
});


export default styles;