import React from 'react'
import { useDispatch } from 'react-redux'   // 
import { bindActionCreators } from 'redux';  // reducing a code lines , you don't need to write deposite() function
import {actionCreators} from "../state/index"

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depositeMoney} = bindActionCreators(actionCreators, dispatch);

    return (
        <>
            <div className="container">
                {/* <div className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}} >-</div>
                Update Balance
                <div className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositeMoney(100))}} >+</div>
                 */}

                <div className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</div>
                Update Balance
                <div className="btn btn-primary mx-2" onClick={()=>{depositeMoney(100)}}>+</div>
            </div>
        </>
    )
}

export default Shop