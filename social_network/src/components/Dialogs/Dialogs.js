import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const Dialog = (props) =>{
    return(
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}
const Dialogs = () => {
    let dialogsData = [
        {name: 'Sasha', id: 1},
        {name: 'Dima', id: 2},
        {name: 'Katya', id: 3},
        {name: 'Masha', id: 4},
        {name: 'Oksana', id: 5}
    ]

    let dialogsItems = 
        dialogsData.map( d => (<Dialog name = {d.name} id = {d.id}/>))

    let messagesData = [
        {message: 'hello', id: 1},
        {message: 'how are you', id: 2},
        {message: 'yo', id: 3},
        {message: 'yo', id: 4},
        {message: 'yo', id: 5},
    ]

    let messagesItems = 
        messagesData.map( mes => (<Message message = {mes.message}/>))
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsItems}                
            </div>
            <div className={style.messages}>
                {messagesItems}      
            </div>
        </div>
    )
}

export default Dialogs;