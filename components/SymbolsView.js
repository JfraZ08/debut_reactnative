import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from "react-native";

export default function SymbolsView() {
  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const [message, setMessage] = useState('');

  const correctCombinations = [
    ['symbol3', 'symbol11'],
    ['symbol1', 'symbol5'],
    ['symbol8', 'symbol3'],
    ['symbol4', 'symbol6'],
  ];

  const toggleSymbolSelection = (symbol) => {
    if (selectedSymbols.length >= 2) {
      return; // Limite la sélection à 4 symboles
    }   

    setSelectedSymbols(prevSymbols => {
      const newSelection = [...prevSymbols, symbol];

      if (newSelection.length === 2) { // Si 2 symboles sont sélectionnés
        if (checkCombination(newSelection)) {
          setMessage("Succès : La bombe est désamorcée !");
        } else {
          setMessage("Échec : La combinaison est incorrecte. Réessayez.");
        }
        resetSelections(); // Réinitialise les sélections après la vérification
      }

      return newSelection;
    });
  };

  const resetSelections = () => {
    setSelectedSymbols([]);
  };

  const checkCombination = (combination) => {
    // Vérifie si la combinaison sélectionnée correspond à l'une des combinaisons correctes
    return correctCombinations.some(correctCombination => {
      return correctCombination.every((symbol, index) => symbol === combination[index]);
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.viewText}>
          Sélectionnez les symboles en tapant dessus :
        </Text>
        <View style={styles.symbols_container}>
          <View style={styles.symbols_child}>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol1')}>
              <Image source={require('../assets/symboles/symbol1.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol2')}>
              <Image source={require('../assets/symboles/symbol2.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol3')}>
              <Image source={require('../assets/symboles/symbol3.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol4')}>
              <Image source={require('../assets/symboles/symbol4.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol5')}>
              <Image source={require('../assets/symboles/symbol5.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol6')}>
              <Image source={require('../assets/symboles/symbol6.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol7')}>
              <Image source={require('../assets/symboles/symbol7.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.symbols_child}>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol8')}>
              <Image source={require('../assets/symboles/symbol8.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol9')}>
              <Image source={require('../assets/symboles/symbol9.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol10')}>
              <Image source={require('../assets/symboles/symbol10.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol11')}>
              <Image source={require('../assets/symboles/symbol11.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol12')}>
              <Image source={require('../assets/symboles/symbol12.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol13')}>
              <Image source={require('../assets/symboles/symbol13.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSymbolSelection('symbol14')}>
              <Image source={require('../assets/symboles/symbol14.jpeg')} style={styles.symbolImage} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Affichez les symboles sélectionnés */}
        <View style={styles.selectedSymbolsContainer}>
          <Text style={styles.selectedSymbolsText}>Symboles sélectionnés :</Text>
          {selectedSymbols.map((symbol, index) => (
            <Image key={index} source={getImageSource(symbol)} style={styles.selectedSymbolImage} />
          ))}
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
        <View style={styles.resetButtonContainer}>
          <Button title="Reset" onPress={resetSelections} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Fonction pour obtenir la source de l'image en fonction du symbole
const getImageSource = (symbol) => {
  switch (symbol) {
    case 'symbol1':
      return require('../assets/symboles/symbol1.jpeg');
    case 'symbol2':
      return require('../assets/symboles/symbol2.jpeg');
    case 'symbol3':
      return require('../assets/symboles/symbol3.jpeg');
    case 'symbol4':
      return require('../assets/symboles/symbol4.jpeg');
    case 'symbol5':
      return require('../assets/symboles/symbol5.jpeg');
    case 'symbol6':
      return require('../assets/symboles/symbol6.jpeg');
    case 'symbol7':
      return require('../assets/symboles/symbol7.jpeg');
    case 'symbol8':
      return require('../assets/symboles/symbol8.jpeg');
    case 'symbol9':
      return require('../assets/symboles/symbol9.jpeg');
    case 'symbol10':
      return require('../assets/symboles/symbol10.jpeg');
    case 'symbol11':
      return require('../assets/symboles/symbol11.jpeg');
    case 'symbol12':
      return require('../assets/symboles/symbol12.jpeg');
    case 'symbol13':
      return require('../assets/symboles/symbol13.jpeg');
    case 'symbol14':
      return require('../assets/symboles/symbol14.jpeg');
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  viewText: {
    textAlign: 'center',
    marginTop: 30,
    marginHorizontal: 10,
    fontSize: 18,
  },
  symbols_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  symbols_child: {
    flex: 1,
    alignItems: 'center',
  },
  symbolImage: {
    marginBottom: 10,
    width: 70,
    height: 70,
  },
  selectedSymbolsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedSymbolsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedSymbolImage: {
    width: 50,
    height: 50,
    margin: 5,
  },
  messageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  messageText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
