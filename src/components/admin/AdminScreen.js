import React, { useContext } from 'react'
import { ContractsContext } from '../ContractsContext';
import { Balance } from '../dashboard/Balance'
import { TokenInfo } from '../dashboard/TokenInfo'

export const AdminScreen = () => {
    const [tokenContract] = useContext(ContractsContext);

    //console.log("contract from admin: ", tokenContract);

    return (
        <div className='container'>
            <h1>Administrator Screen</h1>
            <hr/>
            <TokenInfo  {...tokenContract}/>


            <Balance />
        </div>
    )
}
