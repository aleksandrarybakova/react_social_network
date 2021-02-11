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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                <Dialog name = 'Sasha' id = '1'/>
                <Dialog name = 'Dima' id = '2'/>
                <Dialog name = 'Katya' id = '3'/>
                <Dialog name = 'Masha' id = '4'/>
                <Dialog name = 'Oksana' id = '5'/>                
            </div>
            <div className={style.messages}>
                <Message message = 'hello'/>
                <Message message = 'how are you'/>
                <Message message = 'yo'/>                
            </div>
        </div>
    )
}

export default Dialogs;