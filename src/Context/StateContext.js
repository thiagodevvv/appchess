import React, { createContext } from 'react'

const Context = createContext()
import PlayersState from './hooks/State'


function StateProvider ({children}) {
        const {stateGlobal,timers, selectedTimer, chosenTimer} = PlayersState()
    return (
        <Context.Provider value={{stateGlobal,timers, selectedTimer, chosenTimer}}>
            {children}
        </Context.Provider>
    )
}


export {Context, StateProvider}