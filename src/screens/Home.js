import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { regions } from "../constants/rawData";
import { chooseRandomIndex } from "../utils/randomCountry";

export const HomeScreen = ({
  selectedValue,
  setSelectedValue,
  refetch,
  randomCountry,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Select the Region</Text>
      <Text>You selected: {selectedValue || "Region is not selected"}</Text>
      {selectedValue ? (
        <TouchableOpacity onPress={refetch} style={styles.button}>
          <Text style={styles.buttonText}>Give me Random Country</Text>
        </TouchableOpacity>
      ) : (
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          enabled={false}
        >
          {regions.map((region, idx) => {
            return <Picker.Item key={idx} label={region} value={region} />;
          })}
        </Picker>
      )}
      <Text>{randomCountry?.name.common} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 24,
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-around",
  },
  picker: {
    width: 200,
    height: 36,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    fontSize: 16,
    fontWeight: 600,
  },
});
