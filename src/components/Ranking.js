import React, { useState } from 'react'
import {View, Text, FlatList, Image, StyleSheet} from 'react-native'


import {ContainerList,TextColor, InfoPlayer} from '../style/style'




function Ranking ({ranking}) {
    const Item = ({item}) => (
        <ContainerList>
            <View>
                    <Image style={styles.img} source={item.img}/>
            </View>
            <InfoPlayer>
                <TextColor>
                    Nome: {item.nome}
                    Rating: {item.rating}
                </TextColor>
            </InfoPlayer>
        </ContainerList>
     
    )
    const renderItem = ({item}) => {
        return (
            <Item item={item} />
        )
    }


    return (
        <View>
          <FlatList data={ranking}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} />
        </View>
      
    )
}


const styles = StyleSheet.create({
    img: {
        width: 66,
        height: 66,
    }
})

export default Ranking