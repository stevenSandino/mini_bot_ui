import React, { useEffect, useState } from 'react';
import MiniBotService from '../api/services/MiniBotService';
import Chat from './Chat';

function MiniBot(){
    const [ messegesList, setMessegeList ] = useState<{user:number, messege:string}[]>([]);
    const miniBotService = new MiniBotService();

    function askMiniBot(question:string){
        miniBotService.GetResponce(question)
        .then(res => {
            if(question != ""){
                setMessegeList([...messegesList, {user:1, messege:question}, {user: 0, messege:res.answer}])
            } else {
                setMessegeList([...messegesList, {user: 0, messege:res.answer}])
            }
        }).catch(e => {console.log(e.message)});
    }
    useEffect(()=>{
        askMiniBot("")
    }, []);
    return (
        <div>
            <Chat
                askMiniBot={askMiniBot}
                messegesList={messegesList}
            />
        </div>
        
    );
}
export default MiniBot;
