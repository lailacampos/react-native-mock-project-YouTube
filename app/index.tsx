import { StyleSheet, StatusBar, Text, View } from "react-native";
import "../global.css";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View className="bg-blue-300 flex flex-1 justify-center items-center">
      <Text>Hello World!</Text>
      <StatusBar className="bg-blue-600" />
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({})