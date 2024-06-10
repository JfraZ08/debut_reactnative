import { View, Image, Text, Button, StyleSheet } from 'react-native'


export const Home = ({ navigation}) => {
    
    return (
        <View style={styles.container}>
      <Text style={styles.title}>Home Keep Talking and Nobody Explodes</Text>
      <Image style={{
          width: 300, // Set the desired width
          height: 200, // Set the desired height
          resizeMode: 'contain', // Adjust the resizing mode
          marginBottom: 10, // Add some space below the image
        }}  source={require('../assets/images/keep-talking-game.png')} />
      <Button
        title="Vous souhaitez en voir plus"
        onPress={() => navigation.navigate('String Game')}
      />
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