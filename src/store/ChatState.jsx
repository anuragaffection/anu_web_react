import React, { useState } from "react";
import ChatContext from "./ChatContext";

const ChatState = (props) => {

    // collections of all the threads 
    // in each threads , mulitple chats
    const [threadsCollection, setThreadsCollection] = useState(
        JSON.parse(localStorage.getItem("threads")) || { "thread-1": [] }
    );
    const [chats, setChats] = useState([
        {
            user: "What is ANU",
            anu: "Hello! I am ANU, your Assistance & Nurturing Unit. My main purpose is to assist you in any way I can, providing accurate information, guidance, and support across a wide range of topics. Whether you need help solving problems, finding answers to your questions, or just a little direction along your journey, I'm here to help. I was created with advanced AI technology to ensure I can understand and adapt to your needs, offering the best possible experience.",
        },
    ]);


    return (
        <ChatContext.Provider
            value={{
                chats,
                setChats,
            }}
        >
            {props.children}
        </ChatContext.Provider>
    );
};

export default ChatState;
