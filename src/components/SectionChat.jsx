import React, { useEffect, useRef, useState } from "react";
import { getAnswers } from "../api";
import { BsArrowUp } from "react-icons/bs";

function SectionChat() {
  const chatEndRef = useRef(null);
  const [userQuestion, setUserQuestion] = useState("");
  const [chats, setChats] = useState([
    {
      user: "What is ANU",
      anu: "Hello! I am ANU, your Assistance & Nurturing Unit. My main purpose is to assist you in any way I can, providing accurate information, guidance, and support across a wide range of topics. Whether you need help solving problems, finding answers to your questions, or just a little direction along your journey, I'm here to help. I was created with advanced AI technology to ensure I can understand and adapt to your needs, offering the best possible experience.",
    },
  ]);

  const handleSend = async () => {
    if (userQuestion.trim() === "") {
      setChats((prevChats) => [
        ...prevChats,
        {
          user: "(empty question)",
          anu: "Please increase your question size.",
        },
      ]);
      return;
    }

    setChats((prevChats) => [
      ...prevChats,
      {
        user: userQuestion,
        anu: "Anu finding your short solution....",
      },
    ]);

    try {
      const answer = await getAnswers(userQuestion);

      setChats((prevChats) =>
        prevChats.map((item, index) =>
          index === prevChats.length - 1
            ? { ...item, anu: answer }
            : item
        )
      );
      console.log(answer)
    } catch (error) {
      setChats((prevChats) =>
        prevChats.map((item, index) =>
          index === prevChats.length - 1
            ? {
              ...item,
              anu: "Sorry, an error has occurred. Please contact the developer.",
            }
            : item
        )
      );
    } finally {
      setUserQuestion("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView();
    }
  }, [chats]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-between space-y-6 py-8">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-auto">
        <div className="flex h-full w-full max-w-3xl flex-col gap-y-8 pt-6">
          {chats &&
            chats.map((item, index) => (
              <div className="space-y-4" key={index}>
                <div className="flex justify-end">
                  <p className="items-end rounded-lg border border-neutral-300 bg-warmBeige px-4 py-3 text-right text-lg">
                    {item.user}
                  </p>
                </div>
                <p className="text-xl">{item.anu}</p>
              </div>
            ))}
          <div ref={chatEndRef}/>
        </div>
      </div>

      <div
        className="flex w-full max-w-3xl flex-col gap-y-2">
        <div className="flex h-12 w-full items-center justify-between gap-2 overflow-hidden rounded-full border-2 border-neutral-300 bg-white">
          <input
            type="text"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Talk With Anu"
            className="h-full flex-1 bg-white px-6 text-black focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-darkGreen text-white"
          >
            <BsArrowUp />
          </button>
        </div>
        <div className="text-center">
          Anu may make mistakes, please don't rely on its information.
        </div>
      </div>
    </div>
  );
}

export default SectionChat;
