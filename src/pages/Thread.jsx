import React from "react";
import { LuHome, LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

function Thread() {
  const threads = [
    {
      id: "1",
      title: "",
      preview: "Kindness is the act of showing e...",
      icon: <LuHome className="h-5 w-5 text-[#004d40]" />,
    },
    {
      id: "2",
      title: "Pi the Number",
      preview: "Sure thing! Pi is an irrational nu...",
    },
    {
      id: "3",
      title: "Dream Storytelling",
      preview: 'You mean "storytelling" in your ...',
      timestamp: "Yesterday",
    },
    {
      id: "4",
      title: "OpenAI API",
      preview: "Here's a quick summary of how y...",
    },
    {
      id: "5",
      title: "Clear Explanation",
      preview: "Glad to clear that up for you! No...",
    },
    {
      id: "6",
      title: "Introduction",
      preview: "I'm Pi, a helpful, chatty AI that c...",
    },
    {
      id: "5",
      title: "Clear Explanation",
      preview: "Glad to clear that up for you! No...",
    },
    {
      id: "6",
      title: "Introduction",
      preview: "I'm Pi, a helpful, chatty AI that c...",
    },
  ];
  return (
    <div className="flex h-full w-96 border border-r-neutral-300 bg-beige pb-1 pt-8">
      <div className="flex h-full w-full flex-col">
        {/* header  */}
        <div className="mb-3 flex w-full px-4">
          <header className="flex h-full w-full max-w-2xl items-center justify-between">
            <h1 className="font-serif text-4xl">Threads</h1>
            <button className="flex items-center gap-2 rounded-lg bg-coreBeige px-4 py-2 text-darkGreen transition-colors hover:bg-darkBeige">
              <span className="font-medium">New thread</span>
              <LuPlus className="h-5 w-5" />
            </button>
          </header>
        </div>

        {/* threads */}
        <div className="flex w-full flex-col overflow-auto px-4 py-6">
          <div className="w-full max-w-2xl space-y-4">
            {threads.map((thread, index) => (
              <div key={thread.id}>
                {thread.timestamp && (
                  <div className="mb-4 text-sm text-coreGray">
                    {thread.timestamp}
                  </div>
                )}
                <Link href={`/thread/${thread.id}`}>
                  <div className="rounded-xl bg-coreBeige p-4 transition-colors hover:bg-darkBeige">
                    {thread.icon && <div className="mb-2">{thread.icon}</div>}
                    {thread.title && (
                      <h2 className="mb-1 text-xl text-warmGray">
                        {thread.title}
                      </h2>
                    )}
                    <p className="text-lg text-darkGreen">{thread.preview}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
