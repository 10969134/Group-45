import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image,FlatList,ScrollView} from "react-native";
import slides from '../slides.js'
import OnboarrdingItem from "./OnboarrdingItem.jsx";

export default function Onboarding({ navigation }) {
  return (
    <View>
      <View>
        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <OnboarrdingItem item={item} navigate={navigation} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
        ></FlatList>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}