import { useState } from "react";
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
  TouchableOpacity,
} from "react-native";

const initialState = { login: "", email: "", password: "" };

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const onHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState)
  };
  return (
    <TouchableWithoutFeedback onPress={onHideKeyboard}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode="cover"
          source={require("../assets/images/Photo BGbg.png")}
          style={styles.bgImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.wrapper,
                paddingBottom: isShowKeyboard ? 32 : 80,
              }}
            >
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.form}>
                <View
                  style={{
                    gap: 16,
                    paddingBottom: isShowKeyboard ? 0 : 43,
                  }}
                >
                  <TextInput
                    placeholder="Логін"
                    style={styles.input}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    value={state.login}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                  <TextInput
                    placeholder="Адреса електронної пошти"
                    style={styles.input}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                  <TextInput
                    placeholder="Пароль"
                    style={styles.input}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity style={styles.btn} onPress={onHideKeyboard}>
                  <Text style={styles.btnTxt}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ textAlign: "center", color: "#1b4371" }}>
                    Вже є акаунт? Увійти
                  </Text>
                </TouchableOpacity>
              </View>
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
    width: "100%",
    height: 549,
  },
  title: {
    // fontFamily: var(--font-family),
    // fontWeight: 500,
    fontSize: 30,
    // letterSpacing:  0.01em,
    textAlign: "center",
    color: 212121,
  },
  form: {
    marginHorizontal: 16,
  },

  input: {
    height: 50,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    // marginBottom: 16,
  },
  bgImage: {
    flex: 1,

    justifyContent: "flex-end",
    // alignItems: "center",
  },
  btn: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    backgroundColor: "#ff6c00",
  },
  btnTxt: {
    color: "#fff",
  },
});
