import React, {useState} from 'react'
import {Container} from './src/style/style'
import playerone from './playerone.jpg'
import Ranking from './src/components/Ranking'



const DATA = [{
  id: "1",
  img: playerone,
  nome: "Thiago",
  rating: "1999",
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
    id: "2",
  img: playerone,
  nome: "PLayer 2",
  rating: "1999",
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
    id: "3",
  img: playerone,
  nome: "Player 3",
  rating: "1999",
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
  }
  ]

export default function App() {

  return (
      <Container>
        <Ranking ranking={DATA} />
      </Container>
   
  )
}

