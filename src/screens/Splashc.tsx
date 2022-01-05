import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { readKey } from '../../api';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Splashc = () => {

    const navigation = useNavigation();
    const [llave, setLlave] = useState("")
    readKey().then((value) => {
      setLlave(value)
    })

    setTimeout(() => {
      if(llave != null && llave != '' && llave != undefined){
        navigation.navigate("Pass" as any)
      }
        navigation.navigate("Home" as any)
    }, 2500);

    return (
        <View style={styles.body}>

          <View style={styles.containeruno}>
            {/* <Image style={styles.logorigin} source={require('./img/logocolor.png')}  /> */}
            <Animatable.View 
              animation="fadeInDownBig"
              duration={2000}>
              <Image style={styles.logo} source={require('./img/mm1.png')}  />
            </Animatable.View>
            <Animatable.View
              animation="fadeInUp"
              duration={2000}>
              <Image style={styles.logo2} source={require('./img/mm2.png')}  />
              <Image style={styles.letras} source={require('./img/mm3.png')}/>
            </Animatable.View>
          </View>
        </View>
    )
}

export default Splashc

const styles = StyleSheet.create({

  body: {
      width: '100%',
      height: '100%',
      flex: 1,
      justifyContent: 'center',
  },
  containeruno:{
      paddingLeft: '5%',
      paddingRight: '4%',
      alignItems:'center',
  },
  logorigin:{
      width: 250,
      height: 250,
      resizeMode: 'contain',
  },
  logo:{
    width: 250,
    height: 250,
    resizeMode: 'contain',
    top: '100%',
  },
  logo2:{
      width: 250,
      height: 250,
      resizeMode: 'contain',
  },
  letras: {
      width: 250,
      height: 250,
      resizeMode: 'contain',
      top: '-50%',
  },
})
