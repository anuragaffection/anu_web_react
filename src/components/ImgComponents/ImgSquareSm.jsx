import React, { useContext } from "react";
import ChatContext from "../../store/ChatContext";
import { getAnswers } from "../../api";
import { useNavigate } from "react-router-dom";

function ImgSquareSm({ to, src, alt, text, className = "" }) {
  const chatStates = useContext(ChatContext);
  const { getNewThread, setChats, isMobile } = chatStates;
  const navigate = useNavigate();

  const handleDiscoverClick = async (e) => {
    e.preventDefault();
    await getNewThread();
    await handleSend();
    if (isMobile) {
      navigate("/");
    }
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
      <div className="group relative h-full min-h-36 w-full transform overflow-hidden rounded-2xl transition-transform hover:scale-95">
        <img
          src={`${src}`}
          alt={`${alt}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 transition-colors">
          <h3 className="absolute bottom-2 left-4 text-start text-xl font-medium text-beige">
            {`${text}`}
          </h3>
        </div>
      </div>
    </button>
  );
}

export default ImgSquareSm;
