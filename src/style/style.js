import styled from 'styled-components/native'


export const Container = styled.View `
   width: 100%;
   height: 100%;
   background-color: black;
   display: flex;
   flex-direction: column;
`

export const ContainerList = styled.View `
    margin: 10px;
    display: flex;
    flex-direction: row;
`

export const ContainerButtonPlay = styled.View `
    display: flex;
    align-items: center;
`


export const TextColor = styled.Text `
    color: white;
    font-weight: bold;
    margin: 5px;
`

export const InfoPlayer = styled.View ` 
    display: flex;
    flex-direction: column;
    margin-left: 10;
`

export const ButtonPlay = styled.TouchableOpacity `
    width: 350px;
    height: 50px;
    background-color: orange;
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
`