import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/Photo BGbg.png")}
          style={styles.bgImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.wrapper}>
              <Text>Реєстрація</Text>
              <TextInput placeholder="Логін" style={styles.input} />
              <TextInput
                placeholder="Адреса електронної пошти"
                style={styles.input}
              />
              <TextInput placeholder="Пароль" style={styles.input} />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    width: '100%',
    height: 549,
  },
  title: {},
  input: {
    height: 50,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    marginHorizontal: 16,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
});
