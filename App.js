import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, {useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/EvilIcons";

import S_2 from './screen/s_2';

const Stack = createStackNavigator();

const Home = ({navigation, color }) =>{
  return(
    <View style={styles.container}>
      <View style={styles.mg}>
        <View style={styles.top}>
          <Image source={color} style={styles.image} />
        </View>
        <View>
          <Text style={styles.fs15}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>

        <View style={[styles.fl, { alignItems: "center", marginVertical: 10 }]}>
          <View style={styles.fl}>
            <Icon name="star" color="yellow" size={30} />
            <Icon name="star" color="yellow" size={30} />
            <Icon name="star" color="yellow" size={30} />
            <Icon name="star" color="yellow" size={30} />
            <Icon name="star" color="yellow" size={30} />
          </View>
          <View>
            <Text style={styles.fs15}>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View style={[styles.fl, { alignItems: "center" }]}>
          <Text style={[styles.fs18, { marginRight: 40 }]}>1.790.000 đ</Text>
          <Text
            style={[
              styles.fs15,
              { textDecorationLine: "line-through", color: "gray" },
            ]}
          >
            1.790.000 đ
          </Text>
        </View>

        <View style={[styles.fl, { marginVertical: 10, alignItems: 'center'}]}>
          <Text style={styles.fs12}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <View>
            <Icon2 name="question" color="black" size={30} />
          </View>
        </View>
        <View style={styles.bnt1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('s_2')}
          >
            <View
              style={[
                styles.fl,
                {
                  flex: 1,
                  paddingVertical: 10,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={styles.fs15}>4 MÀU-CHỌN MÀU</Text>
              <Icon1
                name="right"
                color="black"
                size={30}
                style={{ position: "absolute", right: -80 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 45 }}>
          <TouchableOpacity
            style={[
              styles.bnt2,
              { alignItems: "center", justifyContent: "center" },
            ]}
          >
            <Text style={[styles.fs20, { color: "white" }]}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default function App() {
  const [color, setColor] = useState(require("./img/vs_blue.png"));


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home">
          {({ navigation }) => (
            <Home navigation={navigation} color={color} />
          )}
        </Stack.Screen>
        <Stack.Screen name="s_2">
          {({ navigation }) => (
            <S_2
              navigation={navigation}
              updateColor={(newColor) => setColor(newColor)}
            />
          )}
        </Stack.Screen>
    </Stack.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 301,
    height: 361,
  },
  container: {
    flex: 1,
  },
  top: {
    alignItems: "center",
  },
  mg: {
    marginHorizontal: 20,
  },
  fl: {
    flexDirection: "row",
  },
  fs12: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
  fs15: {
    fontSize: 15,
    fontWeight: "bold",
  },
  fs18: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fs20: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bnt1: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  bnt2: {
    width: 350,
    height: 44,
    borderRadius: 8,
    backgroundColor: "red",
  },
});
