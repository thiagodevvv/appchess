import React from 'react'
import {ContainerVersus, TextVersus, Player1, Player2} from './style/style'
import {AppLoading} from 'expo'
import { useFonts } from '@expo-google-fonts/pacifico'


function Versus ({isVisible, p1, p2}) {

    let [fontsLoaded] = useFonts({
        'FontCustom2': require('../../assets/fonts/fontcustom.ttf'),
    })

    if(!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <ContainerVersus isVisible={isVisible}>
            <Player1 source={p1}/>
                <TextVersus style={{fontFamily: "FontCustom2"}} >VS</TextVersus>
            <Player2 source={p2} />
        </ContainerVersus>
    )
}


export default Versus