import React, { useEffect, useState } from "react";
import ChatContext from "./ChatContext";

const ChatState = (props) => {
  // my plans
  // 1. get all chat in - chats
  // 2. put/update all chats in a -  a current thread
  // 3. put/update all threads in a - thread collections

  // 01. chats
  const [chats, setChats] = useState([
    {
      user: "What is ANU",
      anu: "Hello! I am ANU, your Assistance & Nurturing Unit. My main purpose is to assist you in any way I can, providing accurate information, guidance, and support across a wide range of topics. Whether you need help solving problems, finding answers to your questions, or just a little direction along your journey, I'm here to help.",
    },
  ]);

  // 02. thread - this will be changing, but always (keep in mind )
  const [currentThread, setCurrentThread] = useState(`thread-first`);

  //03.  collections of all the threads , each threads has multiple chats
  const [threadsCollection, setThreadsCollection] = useState(
    JSON.parse(localStorage.getItem("threadsCollection")) || {
      "thread-first": [],
    },
  );

  // updating chats in a single threads then collection update
  // useEffect, will be good to update, whenever chats changes
  const updateThreadCollectionChats = () => {
    const updatedThreadsCollection = {
      ...threadsCollection,
      [currentThread]: chats,
    };
    setThreadsCollection(updatedThreadsCollection);
    localStorage.setItem(
      "threadsCollection",
      JSON.stringify(updatedThreadsCollection),
    );
  };

  // call at buttons
  const getNewThread = () => {
    const newThread = `thread-${Date.now()}`;
    setCurrentThread(newThread);
    setThreadsCollection({ ...threadsCollection, [newThread]: [] });
    localStorage.setItem(
      "threadsCollection",
      JSON.stringify({ ...threadsCollection, [newThread]: [] }),
    );
  };

  // call the selections of each thread
  const selectThread = (threadId) => {
    setCurrentThread(threadId);
  };

  useEffect(() => {
    updateThreadCollectionChats();
  }, [chats]);

  return (
    <ChatContext.Provider
      value={{
        chats,
        setChats,
        currentThread,
        setCurrentThread,
        threadsCollection,
        setThreadsCollection,
        updateThreadCollectionChats,
        getNewThread,
        selectThread,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
