import React, {useState, useContext} from 'react'
import {View,Text} from 'react-native'

import {Context} from '../Context/StateContext'
import Versus from './Versus'
import {ContainerSelectPlayers, Players, Picture, ClearButton, TextColor} from './style/style'


function SelectPlayers ({isVisible}) {

    const {stateGlobal} = useContext(Context) 
    const [player1, setPlayer1] = useState(null)
    const [player2, setPlayer2] = useState(null)
    
    function clear () {
        setPlayer1(null)
        setPlayer2(null)
    }

    return (
        <ContainerSelectPlayers isVisible={isVisible}>
            <View style={{display: "flex", flexDirection: "row"}}>
                {stateGlobal.map((player,i) => {
                    return (
                        <Players  key={i} onPress={() => {
                            if(player1 === null) {
                                setPlayer1(player.img)
                            } else {
                                setPlayer2(player.img)
                            }
                        }}>
                            <Picture source={player.img}/>
                        </Players>
                    )
                })}
            </View>
             <Versus isVisible={isVisible} p1={player1} p2={player2} />
                <View style={{display: "flex", alignItems: "center"}}>
                    <ClearButton onPress={clear}>
                        <Text style={{fontFamily: "FontCustom"}}>Limpar</Text>
                    </ClearButton>
                </View>
        </ContainerSelectPlayers>
    )
}

export default SelectPlayers