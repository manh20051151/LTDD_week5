import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'



export default function s_2({ navigation, updateColor }) {
  const [image, setimage] = useState(require("../img/vs_blue.png"));
  const [text, setText] = useState('Đỏ');
  return (
    <View>
      <View style= {[styles.fl, {marginHorizontal: 10, marginBottom: 20, marginTop: 10}]}>
        <View>
        <Image source={image} style={styles.image} />
        </View>
        <View style={{marginHorizontal:10}}>
          <Text style= {[{fontSize: 15}]}>Điện Thoại Vsmart Joy 3 </Text>
          <Text style= {[{fontSize: 15}]}>Hàng chính hãng</Text>
          <View style= {[styles.fl]}>
            <Text>Màu: </Text>
            <Text style= {[{fontSize: 15, fontWeight: 'bold'}]}>{text}</Text>
          </View>
          <View style= {[styles.fl, {marginVertical: 8}]}>
            <Text >Cung cấp bởi: </Text>
            <Text style= {[{fontSize: 15, fontWeight: 'bold'}]}>Tiki Tradding</Text>
          </View>
          <Text style= {[{fontSize: 19, fontWeight: 'bold'}]}>1.790.000 đ</Text>
        </View>
      </View>
      
      <View style={{backgroundColor: '#c4c4c4'}}>
        <View>
          <Text style= {[{fontSize: 18, margin: 10}]}>Chọn một màu bên dưới:</Text>
        </View>
        <View style={[styles.center]}>
          <Pressable style={{backgroundColor: '#c5f1fb', width: 70, height:70}}
          onPress={()=>{
            setimage(require("../img/vs_silver.png"))
            setText('Silver')
          }}
          ></Pressable>
          <Pressable style={{backgroundColor: '#f30d0d', width: 70, height:70, marginVertical: 10}}
          onPress={()=>{
            setimage(require("../img/vs_red.png"))
            setText('Đỏ')
          }}
          ></Pressable>
          <Pressable style={{backgroundColor: '#000000', width: 70, height:70}}
          onPress={()=>{
            setimage(require("../img/vs_black.png"))
            setText('Đen')
          }}
          ></Pressable>
          <Pressable style={{backgroundColor: '#234896', width: 70, height:70, marginVertical: 10}}
            onPress={()=>{
              setimage(require("../img/vs_blue.png"))
              setText('Xanh')
            }}
          ></Pressable>

        </View>
        <View style={[styles.center]}>
          <TouchableOpacity style={[ styles.center,{height:44, width: 326, backgroundColor: '#4d6dc1', borderRadius: 10}]}
                    onPress={() => {
                      updateColor(image)
                      navigation.navigate('Home');
                    }}
          >
            <Text style={[{color: 'white', fontWeight: 'bold', fontSize: 20}]}>XONG</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
      center: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      image: {
        width: 112,
        height: 132,
        resizeMode: 'contain'
      },
      fl: {
        flexDirection: 'row'
      }
})