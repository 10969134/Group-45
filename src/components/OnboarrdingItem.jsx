import React from "react";
import { View,Text,StyleSheet,Image,useWindowDimensions, Button } from "react-native";

export default OnboardingItem = ({ item, navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/oval_header.png")}
        style={styles.backimage}
      />
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={[styles.textContainer, { width, resizeMode: "contain" }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Button
        onPress={() => navigation.navigate("OnBoarding2")}
        style={{ backgroundColor: "black" }}
        title="Next"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "70%", 
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backimage:{
    position:"absolute", top:-65,
  }
  ,
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    padding:0.5,
    textAlign:'center',
  },
  description: {
    marginTop:0.5,
    fontSize: 16,
    textAlign: "center",
    padding:0.5,
  },
  button:{
    margin:23,
    borderRadius:'50%',
    backgroundColor:"black"
  }
});