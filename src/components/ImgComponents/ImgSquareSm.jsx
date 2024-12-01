import React, { useContext } from "react";
import ChatContext from "../../store/ChatContext"
import { getAnswers } from "../../api";

function ImgSquareSm({ to, src, alt, text, className = "" }) {

  const chatStates = useContext(ChatContext);
  const { getNewThread, setChats } = chatStates;

  const handleDiscoverClick = async (e) => {
    e.preventDefault();
    await getNewThread()
    await handleSend();
  }

  const handleSend = async () => {
    if (text.trim() === "") {
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
        user: text,
        anu: "Anu finding your short solution....",
      },
    ]);

    try {
      const answer = await getAnswers(text);

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
    }
  };

  return (
    <button
      onClick={handleDiscoverClick}
      className={`block ${className}`}
    >
      <div className="group relative h-full min-h-36 w-full overflow-hidden rounded-2xl">
        <img
          src={`${src}`}
          alt={`${alt}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40">
          <h3 className="absolute bottom-4 left-4 text-xl font-medium text-white">
            {`${text}`}
          </h3>
        </div>
      </div>
    </button>
  );
}

export default ImgSquareSm;
