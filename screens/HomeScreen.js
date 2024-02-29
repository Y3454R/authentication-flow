import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";

// HomeScreen.js

export function HomeScreen({ navigation, route }) {
  const { signIn, signOut } = route.params; // Access signIn and signOut from route params

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
