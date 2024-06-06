import { theme } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        {/* onPress 속성을 넣어줘야만 스타일 적용이 됨 */}
        <TouchableHighlight
          onPress={() => console.log("onPress")}
          underlayColor={"red"}
          activeOpacity={0.5}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
        {/* 애니메이션이 없는 Touchable */}
        {/* opPress에도 다양한 종류가 있음 web이랑 확실히 다르죠? */}
        <TouchableWithoutFeedback onPress={() => console.log("onPress")}>
          <Text style={styles.btnText}>33</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 80,
    width: "100%",
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
});
