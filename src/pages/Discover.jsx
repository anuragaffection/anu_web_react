import React from "react";
import { Link } from "react-router-dom";
import { FiMessageCircle } from "react-icons/fi";

function Discover() {
  return (
    <div className="w-96 border border-r-neutral-300 bg-warmBeige">
      <div className=" p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Greeting */}
          <h1 className="text-3xl font-serif text-[#004d40]">
            Good afternoon, <span className="italic">Anurag</span>
          </h1>

          {/* History Card */}
          <Link href="/history" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <FiMessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-[#004d40] mb-2">
                    Download your Pi conversation history
                  </h2>
                  <p className="text-emerald-600">Manage history</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Criticism Card */}
            <Link href="/criticism" className="block">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Office space"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-medium">
                    How to deal with criticism
                  </h3>
                </div>
              </div>
            </Link>

            {/* Saving Money Card */}
            <Link href="/saving" className="block">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Piggy bank"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-medium">
                    How to start saving money
                  </h3>
                </div>
              </div>
            </Link>

            {/* Egoism vs Altruism Card */}
            <Link href="/egoism-altruism" className="block">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-serif text-[#004d40] mb-4">
                  Egoism vs. altruism
                </h3>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Brain illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>

            {/* Manifest Desires Card */}
            <Link href="/manifest" className="block md:col-span-2">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=500&width=1000"
                  alt="Glowing hands"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                  <h3 className="absolute bottom-4 left-4 text-white text-3xl font-serif">
                    Manifest your deepest desires
                  </h3>
                </div>
              </div>
            </Link>

            {/* Jealousy vs Envy Card */}
            <Link href="/jealousy-envy" className="block">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-serif text-[#004d40] mb-4">
                  Jealousy vs. envy
                </h3>
                <div className="relative h-32 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ocean painting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>

            {/* Love Language Quiz Card */}
            <Link href="/love-language-quiz" className="block">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Couple illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-medium">
                    Quiz: what's my love language?
                  </h3>
                </div>
              </div>
            </Link>

            {/* Meditation Card */}
            <Link href="/meditation" className="block">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sunset meditation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-medium">
                    How to meditate in 5 steps
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
