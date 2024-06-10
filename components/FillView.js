import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, Switch, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';

const COLORS = ["red", "blue", "yellow", "white", "black"];

export default function FilView() {
    const [numberOfWires, setNumberOfWires] = useState("3");
    const [fils, setFils] = useState(["red", "red", "red"]);
    const [serialEndIsPair, setSerialEndIsPair] = useState(false);

    const res = useMemo(() => {
        const nbRed = fils.filter(fil => fil === "red").length;
        const nbBlue = fils.filter(fil => fil === "blue").length;
        const nbYellow = fils.filter(fil => fil === "yellow").length;
        const nbBlack = fils.filter(fil => fil === "black").length;
        const nbWhite = fils.filter(fil => fil === "white").length;

        if (fils.length === 3) {
            if (nbRed === 0) {
                return "Couper le 2ème fil";
            }
            if (fils[fils.length - 1] === "white") {
                return "Couper le dernier fil";
            }
            if (nbBlue > 1) {
                return "Couper le dernier fil bleu";
            }
            return "Couper le dernier fil";
        } else if (fils.length === 4) {
            if (nbRed > 1 && serialEndIsPair) {
                return "Couper le dernier fil rouge";
            }
            if (fils[fils.length - 1] === "yellow" && nbRed === 0) {
                return "Couper le 1er fil";
            }
            if (nbBlue === 1) {
                return "Couper le 1er fil";
            }
            if (nbYellow > 1) {
                return "Couper le dernier fil";
            }
            return "Couper le 2ème fil";
        } else if (fils.length === 5) {
            if (fils[fils.length - 1] === "black" && !serialEndIsPair) {
                return "Couper le 4ème fil";
            }
            if (nbRed === 1 && nbYellow > 1) {
                return "Couper le 1er fil";
            }
            if (nbBlack === 0) {
                return "Couper le 2ème fil";
            }
            return "Couper le 1er fil";
        } else {
            if (nbYellow === 0 && !serialEndIsPair) {
                return "Couper le 3ème fil";
            } else if (nbYellow === 1 && nbWhite > 1) {
                return "Couper le 4ème fil";
            } else if (nbRed === 0) {
                return "Couper le dernier fil";
            } else {
                return "Couper le 4ème fil";
            }
        }
    }, [fils, serialEndIsPair]);

    const handleChangeNumberOfWires = (value) => {
        setNumberOfWires(value);
        setFils(new Array(parseInt(value)).fill("red"));
    };

    const handleChangeFilColor = (index, color) => {
        const newFils = [...fils];
        newFils[index] = color;
        setFils(newFils);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>String Game</Text>
            <View style={styles.inputGroup}>
                <Text>Nb Fils</Text>
                <Picker
                    style={styles.input}
                    selectedValue={numberOfWires}
                    onValueChange={(value) => handleChangeNumberOfWires(value)}
                >
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                </Picker>
            </View>
            <View style={styles.inputGroup}>
                <Text>Dernier numéro de série est pair</Text>
                <Switch
                    value={serialEndIsPair}
                    onValueChange={() => setSerialEndIsPair(!serialEndIsPair)}
                />
            </View>

            <ScrollView style={styles.wires}>
                {fils.map((fil, index) => (
                    <View key={index} style={styles.filLine}>
                        <View style={[styles.wire, { backgroundColor: fil }]}></View>
                        {fils.length >= 3 && fils.length <= 6 && (
                            <Picker
                                selectedValue={fil}
                                style={styles.picker}
                                onValueChange={(itemValue) => handleChangeFilColor(index, itemValue)}
                            >
                                {COLORS.map((color, colorIndex) => (
                                    <Picker.Item key={colorIndex} label={color} value={color} />
                                ))}
                            </Picker>
                        )}
                    </View>
                ))}
            </ScrollView>

            <View style={styles.result}>
                <Text>{res}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    wires: {
        marginVertical: 20,
    },
    filLine: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    wire: {
        width: 50,
        height: 10,
        marginRight: 10,
    },
    picker: {
        flex: 1,
        height: 40,
    },
    result: {
        marginTop: 20,
    },
});
