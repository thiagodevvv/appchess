import React, {useState, useContext} from 'react'

import {Context} from './src/Context/StateContext'

import SelectPlayers from './src/components/SelectPlayers'
import Ranking from './src/components/Ranking'
import SelectTimer from './src/components/SelectTimer'

import {Container, ButtonPlay, TextButtonPlay, ContainerButtonPlay} from './src/components/style/style'
import {LinearGradient,} from 'expo-linear-gradient'

import {AppLoading} from 'expo'
import { useFonts } from 'expo-font'

function Home ({navigation}) {

    const {stateGlobal} = useContext(Context)

    const [isVisible, setIsVisible] = useState(true)
    let [fontsLoaded] = useFonts({
    'FontCustom': require('./assets/fonts/russoone.ttf'),
    })

    if(!fontsLoaded) {
    return <AppLoading/>
    
  }
    return (
      <LinearGradient  colors={['#f00808', '#e8da0c']}
      style={{position: 'absolute',height: "100%",width: "100%"}}> 
          <Container >
              <Ranking isVisible={isVisible} ranking={stateGlobal}/>
              <ContainerButtonPlay isVisible={isVisible}>
                  <ButtonPlay onPress={() => setIsVisible(false)}>
                      <TextButtonPlay style={{fontFamily: "FontCustom"}}>
                          PLAY
                      </TextButtonPlay>
                  </ButtonPlay>
              </ContainerButtonPlay>
              <SelectPlayers isVisible={isVisible} />
              <SelectTimer navigation={navigation} isVisible={isVisible}/>
          </Container>
      </LinearGradient>
  
    )
}

export default Home