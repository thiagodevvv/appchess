import React, { useState } from 'react'
import {View,Image, StyleSheet} from 'react-native'
import {ContainerList,TextColor, InfoPlayer} from '../components/style/style'
import {AppLoading} from 'expo'
import { useFonts } from 'expo-font'

function Ranking ({ranking, isVisible}) {

    let [fontsLoaded] = useFonts({
        'FontCustom': require('../../assets/fonts/russoone.ttf'),
    })

    if(!fontsLoaded) {
        return <AppLoading/>
    }

    ranking.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))

    return (
        <View>
          {ranking.map((element, i) => {
              return (
                <ContainerList isVisible={isVisible} key={i}>
                <Image style={styles.img} source={element.img}/>
                <InfoPlayer>
                <TextColor style={{fontFamily: "FontCustom"}}>
                    Nome: {element.nome}
                </TextColor>
                <TextColor style={{fontFamily: "FontCustom"}}  >
                    Rating: {element.rating}
                </TextColor>
            </InfoPlayer>
                  </ContainerList>
              )
          })}
        </View>
      
    )
}


const styles = StyleSheet.create({
    img: {
        width: 96,
        height: 96,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10
        
    }
})

export default Ranking