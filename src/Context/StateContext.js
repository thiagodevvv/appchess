import React, { createContext } from 'react'

const Context = createContext()
import PlayersState from './hooks/State'


function StateProvider ({children}) {
        const {stateGlobal,timers} = PlayersState()
    return (
        <Context.Provider value={{stateGlobal,timers}}>
            {children}
        </Context.Provider>
    )
}


export {Context, StateProvider}