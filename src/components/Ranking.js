import React, { useState } from 'react'
import {View,Image, StyleSheet} from 'react-native'


import {ContainerList,TextColor, InfoPlayer} from '../style/style'




function Ranking ({ranking}) {
    ranking.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))

    return (
        <View>
          {ranking.map((element, i) => {
              return (
                <ContainerList key={i}>
                <Image style={styles.img} source={element.img}/>
                <InfoPlayer>
                <TextColor>
                    Nome: {element.nome}
                </TextColor>
                <TextColor>
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
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 10
        
    }
})

export default Ranking