import React, {useContext, useState, useEffect} from 'react'
import { Context } from '../Context/StateContext'
import { ButtonTimer, ButtonTimer2, ContainerOptionsTimer, ButtonOptions, ContainerButtonTimers } from './style/style'
import { Text } from 'react-native'
import {AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Audio } from 'expo-av'

const soundObject = new Audio.Sound();


function Timer ({navigation}) {

    useEffect(() =>  {
        (async () => {
            try {
                await clicktimer.loadAsync(require('./buttonsong.mp3'));
                console.log('carregou o som')
              } catch (error) {
                // An error occurred!
              }
        })()
    }, [Timer])
    const { chosenTimer } = useContext(Context)
    const [seconds, setSeconds] = useState(60)
    const [minutes, setMinutes] = useState(chosenTimer)
    const [seconds2, setSeconds2] = useState(60)
    const [minutes2, setMinutes2] = useState(chosenTimer)
    const [funcInterval, setFuncInterval] = useState(null)
    const [funcInterval2, setFuncInterval2] = useState(null)
    const [disableButton, setDisableButton] = useState(false)
    const [disableButton2, setDisableButton2] = useState(false)
    const [color, setColor] = useState(null)
    const [clicktimer, setClicktimer] = useState(soundObject)

    function ControlTimer () {
        if(seconds === 60) {
            return <Timer00/>
        } else {
            return (
                <Timer60/>
            )
        }
    }

    function ControlTimer2 () {
        if(seconds2 === 60) {
            return <Timer00/>
        } else {
            return (
                <Timer602/>
            )
        }
    }
    
    function Timer00 () {
        return (
            <Text>00</Text>
        )
    }
    
    function Timer60 () {
        if(seconds < 10) {
            return <Text>0{seconds}</Text>
        }else {
            return <Text>{seconds}</Text>
        }
    }

    function Timer602 () {
        if(seconds2 < 10) {
            return <Text>0{seconds2}</Text>
        }else {
            return <Text>{seconds2}</Text>
        }
    }
    const startTimer = async () => {
       setFuncInterval(
        setInterval(() => {
            if(minutes === 0) {

                setSeconds(0)
            } 
            if(seconds === 0) {
                console.log('zerou!!!')
                setMinutes(minutes - 1)
                setSeconds(60)
                // setSeconds((prevState) => prevState + 60)
            } else {
                setSeconds((prevState) => {
                    if(prevState === 0) {
                        setSeconds(60)
                        setMinutes((prevState) => {
                            if(prevState === 0) {
                                setSeconds(0)
                                setMinutes(0)
                            }
                            else {
                                return prevState - 1
                            }
                        })
                    }
                    return prevState - 1
                })
            }
        }, 1000)
       )
    
}

    const startTimer2 = () => {
        
    setFuncInterval2(
     setInterval(() => {
         if(minutes2 === 0) {

             setSeconds2(0)
         } 
         if(seconds2 === 0) {
             console.log('zerou!!!')
             setMinutes2(minutes - 1)
             setSeconds2(60)
             // setSeconds((prevState) => prevState + 60)
         } else {
             setSeconds2((prevState) => {
                 if(prevState === 0) {
                     setSeconds2(60)
                     setMinutes2((prevState) => {
                         if(prevState === 0) {
                             setSeconds2(0)
                             setMinutes2(0)
                         }
                         else {
                             return prevState - 1
                         }
                     })
                 }
                 return prevState - 1
             })
         }
     }, 1000)
    )
 
}
    const PauseTimer = async () => {
        await clicktimer.replayAsync();
        setDisableButton(true)
        setDisableButton2(false)
        clearInterval(funcInterval)
        startTimer2()
        setColor(false)

    }

    const PauseTimer2 = async () => {
        await clicktimer.replayAsync();
        setDisableButton(false)
        setDisableButton2(true)
        clearInterval(funcInterval2)
        startTimer()
        setColor(true)
    }

    return (
        <ContainerButtonTimers>
            <StatusBar hidden={true}/>
            <ButtonTimer touchSoundDisabled={true} backgroundcolor={color} disabled={disableButton} onPress={PauseTimer}>
                <Text style={{fontSize: 80, color: "white", fontFamily: "FontCustom"}}>
                     {minutes}: <ControlTimer/>
                </Text>
            </ButtonTimer>
                <ContainerOptionsTimer>
                        <ButtonOptions onPress={() => {
                            clearInterval(funcInterval)
                            clearInterval(funcInterval2)
                            setDisableButton(false)
                            setDisableButton2(false)
                            setColor(null)

                        }}>
                            <AntDesign name="pause" size={40} color="white" /> 
                        </ButtonOptions>
                        <ButtonOptions onPress={() => {
                            clearInterval(funcInterval)
                            clearInterval(funcInterval2)
                            setMinutes(chosenTimer)
                            setSeconds(60)
                            setMinutes2(chosenTimer)
                            setSeconds2(60)
                            setColor(null)
                        }}>
                            <MaterialCommunityIcons name="restart" size={40} color="white" />
                        </ButtonOptions>
                        <ButtonOptions>
                            <AntDesign name="checkcircle" size={40} color="white" />
                        </ButtonOptions>
                        <ButtonOptions onPress={() => navigation.navigate('Home')}>
                            <AntDesign name="home" size={40} color="white" />
                        </ButtonOptions>
                </ContainerOptionsTimer>
            <ButtonTimer2 backgroundcolor={color} disabled={disableButton2} onPress={PauseTimer2}>
                <Text style={{fontSize: 80, color: "white", fontFamily: "FontCustom"}}>
                    {minutes2}: <ControlTimer2/>
                </Text>
            </ButtonTimer2>
        </ContainerButtonTimers>


    )
}


export default Timer