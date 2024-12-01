import React, { useEffect, useRef, useState, useContext } from "react";
import { getAnswers } from "../api";
import { BsArrowUp, BsStars } from "react-icons/bs";
import { LuVolume2, LuVolumeX } from "react-icons/lu";
import ChatContext from "../store/ChatContext";
import { Link } from "react-router-dom";
import { IoIosPaper } from "react-icons/io";
import TopBar from "./TopBar";

function SectionChat() {
  const chatEndRef = useRef(null);
  const chatStates = useContext(ChatContext);
  const { chats, setChats, currentThread, threadsCollection } = chatStates;

  const [userQuestion, setUserQuestion] = useState("");
  const [speech, setSpeech] = useState(false);

  console.log(threadsCollection);
  console.log(currentThread);

  // this is also resetting setChats, value in any value - defined
  // make current thread - strict, should not depend, on any other things,
  // otherwise , will lead to infinite rendering
  useEffect(() => {
    setChats(threadsCollection[currentThread]);
  }, [currentThread]);

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
          index === prevChats.length - 1 ? { ...item, anu: answer } : item,
        ),
      );

      console.log(answer);
    } catch (error) {
      setChats((prevChats) =>
        prevChats.map((item, index) =>
          index === prevChats.length - 1
            ? {
                ...item,
                anu: "Sorry, an error has occurred. Please contact the developer.",
              }
            : item,
        ),
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

  useEffect(() => {
    if (speech === false) {
      window.speechSynthesis.cancel();
    }
    // chats, {user, anu}
    if (speech === true && chats && chats.length > 0) {
      const lastIndex = chats.length - 1;
      const lastResponse = chats[lastIndex].anu;
      console.log(lastResponse);
      if (!window.speechSynthesis) {
        console.error("Speech synthesis not supported in this browser.");
      }
      window.speechSynthesis.cancel();
      if (lastResponse && lastResponse.trim()) {
        const windowSpeech = window.speechSynthesis;
        const toSpeak = new SpeechSynthesisUtterance(lastResponse);
        windowSpeech.speak(toSpeak);
      }
    }
  }, [chats, speech]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between gap-y-6 overflow-clip pb-4 pt-16">
      <TopBar />
      {/* removing link - because it creating hinderance in next */}
      <button
        className="absolute right-4 md:right-10 top-2 z-10 rounded-full bg-coreBeige p-2 hover:bg-darkBeige"
        type="button"
        onClick={() => setSpeech(!speech)}
      >
        {speech === true ? (
          <LuVolume2 className="text-darkGreen" size={24} />
        ) : (
          <LuVolumeX className="text-coreGray" size={24} />
        )}
      </button>

      <div className="flex h-full w-full flex-col items-center justify-center overflow-auto p-2">
        <div className="flex h-full w-full max-w-3xl flex-col gap-y-8 px-4 pt-6">
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
          <div ref={chatEndRef} />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center p-2">
        <div className="flex w-full max-w-3xl flex-col gap-y-2 px-6">
          <div className="flex h-12 w-full scale-105 items-center justify-between gap-2 overflow-hidden rounded-full border border-neutral-300 bg-white">
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
              className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-darkGreenHigh font-bold text-white"
            >
              <BsArrowUp />
            </button>
          </div>
          <div className="text-center text-sm lg:text-lg">
            Anu may make mistakes, please don't rely on its information.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionChat;
