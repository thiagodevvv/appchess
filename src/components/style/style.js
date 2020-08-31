import styled from 'styled-components/native'


export const Container = styled.View `
   /* width: 100%;
   height: 100%; */
   display: flex;
   flex-direction: column;
`

export const ContainerList = styled.View `
    margin: 10px;
    display: ${props => props.isVisible ? 'flex' : 'none'};
    flex-direction: row;
`

export const ContainerButtonPlay = styled.View `
    display: ${props => props.isVisible ? 'flex' : 'none'};
    align-items: center;
`


export const TextColor = styled.Text `
    color: black;
    margin: 5px;
    font-size: 25px;
`

export const InfoPlayer = styled.View ` 
    display: flex;
    flex-direction: column;
    margin-left: 10;
`

export const ButtonPlay = styled.TouchableOpacity `
    width: 350px;
    height: 50px;
    background-color: black;
    border-radius: 10px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextButtonPlay = styled.Text `
    color: black;
    font-weight: bold;
    font-size: 20px;
    color: white;
`


export const ContainerSelectPlayers = styled.View `
   width: 100%;
   height: 400px;
   background-color: transparent;
   display: ${props => props.isVisible ? 'none': 'flex'};
   flex-direction: column;
`

export const Players = styled.TouchableOpacity `
   height: 96px;
   margin: 20px;
`

export const Picture = styled.ImageBackground `
   height: 96px;
   width: 96px;
   border: 2px solid black;
   border-radius: 5px;
   margin: 1px;
`


export const ContainerVersus = styled.View `
    width: 100%;
    height: 100px;
    background-color: transparent;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

`
export const TextVersus = styled.Text `
    font-size: 80px;
    color: black;

`
export const Player1 = styled.Image `
    height: 96px;
    width: 96px;
    border-radius: 5px;
    margin-right: 10px;
    border: 2px solid black;
`
export const Player2 = styled.Image `
    height: 96px;
    width: 96px;
    border-radius: 5px;
    margin-left: 10px;
    border: 2px solid black;
`

export const ClearButton = styled.TouchableOpacity `
    height: 30px;
    width: 80px;
    background-color: transparent;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const ContainerTimer = styled.View `
    display: ${props => props.isVisible ? "none" : "flex"};
    height: 100px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`


export const SelectTimerContainer = styled.TouchableOpacity `
    display: flex;
    height: 50px;
    width: 60px;
    border: 2px solid black;
    border-radius: 5px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    background-color: black;
    
`

export const ButtonStartGame = styled.TouchableOpacity `
    display: flex;
    height: 50px;
    width: 200px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    border-radius: 20px;
`
export const ButtonTimer = styled.TouchableOpacity `
    display: flex;
    height: 300px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: black;
`
export const ButtonTimer2 = styled.TouchableOpacity `
    display: flex;
    height: 300px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: black;
`

export const ContainerOptionsTimer = styled.View `
    display: flex;
    height: 58px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: grey;
    flex-direction: row;
`
export const ButtonOptions = styled.TouchableOpacity `
    height: 40px;
    width: 40px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`








