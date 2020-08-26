import React, {useState} from 'react'




import playerone from '../../../imgs/playerone.jpg'
import player2 from '../../../imgs/player2.png'
import player3 from '../../../imgs/player3.png'

export default function PlayersState() {
    const [stateGlobal, setStateGlobal] = useState([{
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
      }])
    const timers = [1,3,5,10,15]
      return {stateGlobal, timers}
}