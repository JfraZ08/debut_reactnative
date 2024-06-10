import { View, StyleSheet } from 'react-native'
import FillView from './FillView'
export const StringGame = () => {
    return (
        <View style={styles.container}>
      <FillView />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      fontFamily: 'SignRoverLayered', // Use the font family name here
    },
  });