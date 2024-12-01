import React, { useContext } from "react";
import { LuPlus } from "react-icons/lu";
import ChatContext from "../store/ChatContext";
import { useNavigate } from "react-router-dom";

function Thread() {
  const chatStates = useContext(ChatContext);
  const { getNewThread, threadsCollection, selectThread, isMobile } =
    chatStates;
  const navigate = useNavigate();

  console.log("all threads");
  console.log(threadsCollection);
  console.log("converting to array from object");
  console.log(Object.entries(threadsCollection));

  return (
    <div className="flex h-full w-full border border-r-neutral-300 bg-beige pb-1 pt-8 lg:w-96">
      <div className="flex h-full w-full flex-col">
        {/* header  */}
        <div className="mb-3 flex w-full px-4">
          <header className="flex h-full w-full max-w-2xl items-center justify-between">
            <h1 className="font-serif text-4xl">Threads</h1>
            <button
              onClick={(e) => getNewThread()}
              className="flex items-center gap-2 rounded-lg bg-coreBeige px-4 py-2 text-darkGreen transition-colors hover:bg-darkBeige"
            >
              <span className="font-medium">New thread</span>
              <LuPlus className="h-5 w-5" />
            </button>
          </header>
        </div>

        {/* threads */}
        <div className="flex w-full flex-col overflow-auto px-4 py-6">
          <div className="w-full max-w-2xl space-y-4">
            {threadsCollection &&
              Object.entries(threadsCollection).map((thread, index) => (
                <>
                  {thread[1]?.length > 0 && (
                    <button
                      key={thread[0]}
                      onClick={() => {
                        selectThread(thread[0]);
                        if (isMobile) {
                          navigate("/");
                        }
                      }}
                      className="w-full"
                    >
                      <div className="flex w-full flex-col items-start rounded-xl bg-coreBeige p-4 transition-colors hover:bg-darkBeige">
                        <div className="line-clamp-1 text-start text-lg text-warmGray">
                          {thread[1][0]?.user.trim()}
                        </div>
                        <div className="line-clamp-1 text-start text-lg text-darkGreen">
                          {thread[1][0]?.anu.trim()}
                        </div>
                      </div>
                    </button>
                  )}
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
