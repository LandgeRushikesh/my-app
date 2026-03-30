import { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  Switch,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState("");
  const toggelSwitch = () => {
    setIsEnabled((prev) => !prev);
  };
  const isPressed = () => {
    Alert.alert("Button is Clicked!!!");
  };

  const data = [
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Mango" },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        {/* {[...Array(30)].map((_, i) => (
        <Text key={i} style={{ fontSize: 40 }}>
          Hello World {i + 1}
        </Text>
      ))} */}
        <Button title="Click Me" onPress={isPressed} />
        <Switch value={isEnabled} onValueChange={toggelSwitch} />
        <TextInput
          style={{
            borderWidth: 1,
          }}
          value={value}
          onChangeText={setValue}
          placeholder="Enter the text"
          keyboardAppearance="dark"
          keyboardType="numbers-and-punctuation"
          multiline
          numberOfLines={4}
        />
        <Pressable onPress={isPressed}>
          <Text>Click Me</Text>
        </Pressable>

        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",
          }}
        />

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
