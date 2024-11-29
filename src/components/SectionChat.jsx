import React, { useState } from "react";

function SectionChat() {
  const [chats, setChats] = useState([
    {
      user: "What is ANU",
      anu: "Hello! I am ANU, your Assistance & Nurturing Unit. My main purpose is to assist you in any way I can, providing accurate information, guidance, and support across a wide range of topics. Whether you need help solving problems, finding answers to your questions, or just a little direction along your journey, I'm here to help. I was created with advanced AI technology to ensure I can understand and adapt to your needs, offering the best possible experience.",
    },
    {
      user: "Tell me more about Anu",
      anu: "My Assistance component means that I am designed to offer timely help. Think of me as a virtual helper that is always available to provide you with reliable answers, helpful resources, and actionable steps. No matter how complex or simple your query may be, I’ll do my best to provide you with the most relevant information. As for Nurturing, I focus on fostering a positive and supportive environment for you.I don’t just provide answers – I aim to guide you, encourage learning, and promote growth in everything you do.I believe that with the right support, you can achieve great things, and I’m here to help you reach your goals, step by step.",
    },
    {
      user: "Tell me more about Anu",
      anu: "My Assistance component means that I am designed to offer timely help. Think of me as a virtual helper that is always available to provide you with reliable answers, helpful resources, and actionable steps. No matter how complex or simple your query may be, I’ll do my best to provide you with the most relevant information. As for Nurturing, I focus on fostering a positive and supportive environment for you.I don’t just provide answers – I aim to guide you, encourage learning, and promote growth in everything you do.I believe that with the right support, you can achieve great things, and I’m here to help you reach your goals, step by step.",
    },
    {
      user: "Tell me more about Anu",
      anu: "My Assistance component means that I am designed to offer timely help. Think of me as a virtual helper that is always available to provide you with reliable answers, helpful resources, and actionable steps. No matter how complex or simple your query may be, I’ll do my best to provide you with the most relevant information. As for Nurturing, I focus on fostering a positive and supportive environment for you.I don’t just provide answers – I aim to guide you, encourage learning, and promote growth in everything you do.I believe that with the right support, you can achieve great things, and I’m here to help you reach your goals, step by step.",
    },
  ]);
  return (
    <div className="flex h-full w-full flex-col justify-between items-center space-y-6 py-8 ">

      <div className="flex h-full w-full flex-col items-center justify-center overflow-auto">
        <div className="flex h-full w-full max-w-3xl flex-col gap-y-8">
          {chats &&
            chats.map((item, index) => {
              return (
                <div className="space-y-4" key={index}>
                  <p className="bg-blue-500 text-lg">{item.user}</p>
                  <p className="text-xl">{item.anu}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div className=" w-full max-w-3xl flex flex-col gap-y-2">
        <input
          type="text"
          placeholder="Talk With Anu"
          className="h-12 w-full rounded-full border-2 border-neutral-300 bg-white px-6 focus:outline-none"
        />

        <div className="text-center">
          Anu may make mistakes, please don't rely on its information.
        </div>
      </div>
    </div>
  );
}

export default SectionChat;
