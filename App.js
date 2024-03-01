import { StatusBar, StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Login />
    </View>
  );
}
