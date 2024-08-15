import React, { useState } from 'react';
import MessageList from './MessageList';
import PropTypes from 'prop-types';

function Chat({
    askMiniBot,
    messegesList,
}:{
    askMiniBot(question: string): void,
    messegesList:{ user: number; messege: string; }[],
}){
    const [ messege, setMessege ] = useState<string>("");

    return (
            <div className='chat-box'>
              <div className='msg-page'>
                <MessageList
                  messages={messegesList}
                />
                <div className='chat-box-bottom'>
                  <div id='end-of-chat'></div>
                </div>
              </div>
              <div className='msg-footer'>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control message-input'
                      placeholder='Type something'
                      value={messege}
                      onChange={event => setMessege(event.target.value)}
                      required
                    />
                    <button className='send-button' onClick={()=>{
                        setMessege("")
                        askMiniBot(messege)
                        }}>
                            Send Messege
                    </button>
                  </div>
              </div>
            </div>
    );
}
export default Chat;

