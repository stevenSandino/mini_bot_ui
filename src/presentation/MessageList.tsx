import { RobotOutlined, SmileOutlined } from '@ant-design/icons';
import React from 'react';

function MessageList({messages}:{messages:{user:number, messege:string}[]}) {

    return(
        <div>
            {messages.map((m, ind, arr) => 
                (
                    <div
                        key={ind}
                        className='chat-bubble-row'
                        style={{flexDirection: m.user === 0 ? 'row' : 'row-reverse'}}>
                        {m.user === 0 ? (
                            <RobotOutlined />
                        ) : (
                            <SmileOutlined />
                        )}
                        <div className={`chat-bubble ${m.user === 0 ? 'is-user' : 'is-other'}`}>
                            <div
                            className='message'
                            style={{color: m.user === 0 ? '#FFF' : '#2D313F'}}>
                                {m.messege}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
        
    );

    
}

export default MessageList;