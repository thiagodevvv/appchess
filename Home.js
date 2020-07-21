import React from 'react'
import {Text} from 'react-native'

import Ranking from './src/components/Ranking'

import {Container, ButtonPlay, TextButtonPlay, ContainerButtonPlay} from './src/style/style'

import playerone from './playerone.jpg'
import player2 from './player2.png'
import player3 from './player3.png'

const InitialData = [{
    img: playerone,
    nome: "Lemao",
    rating: 2100,
    vitorias: "10",
    derrotas: "0",
    adversarios: {
      playertwo: {
        nome: "PlayerTwo",
        vitorias: "0",
        derrotas: "5"
      },
      playerthree: {
        nome: "PlayerThree",
        vitorias: "0",
        derrotas: "5"
      }
    }
},
{
    img: player2,
    nome: "Vitor",
    rating: 2300,
    vitorias: "10",
    derrotas: "0",
    adversarios: {
      playertone: {
        nome: "PlayerOne",
        vitorias: "0",
        derrotas: "5"
      },
      playerthree: {
        nome: "PlayerThree",
        vitorias: "0",
        derrotas: "5"
      }
    }
},
{
    img: player3,
    nome: "Rick",
    rating: 2500,
    vitorias: "10",
    derrotas: "0",
    adversarios: {
      playertone: {
        nome: "PlayerOne",
        vitorias: "0",
        derrotas: "5"
      },
      playertwo: {
        nome: "PlayerTwo",
        vitorias: "0",
        derrotas: "5"
      }
    }
}]



function Home () {
    return (
        <Container>
            <Ranking ranking={InitialData}/>
            <ContainerButtonPlay>
                <ButtonPlay>
                    <TextButtonPlay style={{fontFamily: "sans-serif-condensed"}}>
                        PLAY
                    </TextButtonPlay>
                </ButtonPlay>
            </ContainerButtonPlay>
        </Container>
    )
}

export default Home