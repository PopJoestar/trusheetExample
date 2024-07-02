import { TrueSheet } from "@lodev09/react-native-true-sheet";
import { useRef } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const products = [
  "Shoe",
  "tee-shirt",
  "Jeans",
  "Jacket",
  "Hat",
  "Scarf",
  "Gloves",
  "Socks",
  "Sweater",
  "Shorts",
];
export default function Index() {
  const sheetRef = useRef<TrueSheet>(null);
  const scrollRef = useRef<ScrollView>(null);

  const { bottom } = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Show sheet"
        onPress={() => {
          sheetRef.current?.present();
        }}
      />
      <TrueSheet
        ref={sheetRef}
        sizes={["auto"]}
        scrollRef={scrollRef}
        FooterComponent={
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "teal",
              bottom: bottom,
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
                fontSize: 18,
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        }
      >
        <View>
          <Text>The header</Text>

          <TextInput
            multiline
            style={{ borderWidth: 1, height: 150, marginBottom: 16 }}
          />
        </View>
      </TrueSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 18,
  },
});
