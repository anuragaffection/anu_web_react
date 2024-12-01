import React, { useContext } from "react";
import ChatContext from "../../store/ChatContext";
import { getAnswers } from "../../api";

function ImgRectangle({ to, src, alt, text, className = "" }) {
  const chatStates = useContext(ChatContext);
  const { getNewThread, setChats } = chatStates;

  const handleDiscoverClick = async (e) => {
    e.preventDefault();
    await getNewThread();
    await handleSend();
  };

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
    <button onClick={handleDiscoverClick} className={`block ${className}`}>
      <div className="group flex h-full min-h-36 w-full items-end justify-center overflow-hidden rounded-2xl bg-coreBeige p-4 transition-colors hover:bg-darkBeige">
        <div className="flex-1 text-start text-xl font-medium text-darkGreen">
          {text}
        </div>

        <img
          src={src}
          alt={alt}
          className="h-auto min-h-36 w-1/2 rounded-xl bg-blue-500 object-cover transition-colors group-hover:bg-black/40"
        />
      </div>
    </button>
  );
}

export default ImgRectangle;
