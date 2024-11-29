import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaChevronCircleRight, FaHistory } from "react-icons/fa";
import { BiChevronRight, BiShield, BiVolume } from "react-icons/bi";
import { LuShare2, LuSmilePlus } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";

function Profile() {
  return (
    <div className="w-96 border border-r-neutral-300 bg-warmBeige">
      <div className="p-6">
        <div className="mx-auto max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold text-[rgb(0,77,64)]">Anurag</h1>

          <div className="space-y-2">
            <Link href="/account" className="block">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#004d40]/5">
                <span className="flex items-center gap-3">
                  <FaUser className="h-5 w-5 text-[#004d40]" />
                  <span className="text-xl font-medium text-[#004d40]">
                    Account
                  </span>
                </span>
                <BiChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </Link>

            <Link href="/history" className="block">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#004d40]/5">
                <span className="flex items-center gap-3">
                  <FaHistory className="h-5 w-5 text-[#004d40]" />
                  <span className="text-xl font-medium text-[#004d40]">
                    Manage history
                  </span>
                </span>
                <BiChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </Link>

            <Link href="/voice" className="block">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#004d40]/5">
                <span className="flex items-center gap-3">
                  <BiVolume className="h-5 w-5 text-[#004d40]" />
                  <span className="text-xl font-medium text-[#004d40]">
                    Voice settings
                  </span>
                </span>
                <BiChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </Link>

            <Link href="/feedback" className="block">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#004d40]/5">
                <span className="flex items-center gap-3">
                  <LuSmilePlus className="h-5 w-5 text-[#004d40]" />
                  <span className="text-xl font-medium text-[#004d40]">
                    Give feedback
                  </span>
                </span>
              </button>
            </Link>

            <Link href="/share" className="block">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#004d40]/5">
                <span className="flex items-center gap-3">
                  <LuShare2 className="h-5 w-5 text-[#004d40]" />
                  <span className="text-xl font-medium text-[#004d40]">
                    Share Pi with others
                  </span>
                </span>
              </button>
            </Link>
          </div>

          <hr className="my-4 border-t border-gray-200" />

          <Link href="https://discord.gg/example" className="block">
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#004d40]/5">
              <span className="flex items-center gap-3">
                <FaDiscord className="h-5 w-5 text-[#004d40]" />
                <span className="text-xl font-medium text-[#004d40]">
                  Join our Discord community
                </span>
              </span>
            </button>
          </Link>

          <hr className="my-4 border-t border-gray-200" />

          <div className="space-y-2">
            <Link href="/privacy" className="block">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#004d40]/5">
                <span className="flex items-center gap-3">
                  <BiShield className="h-5 w-5 text-[#004d40]" />
                  <span className="text-xl font-medium text-[#004d40]">
                    Privacy policy
                  </span>
                </span>
                <BiChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </Link>

            <Link href="/terms" className="block">
              <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#004d40]/5">
                <span className="flex items-center gap-3">
                  <FiFileText className="h-5 w-5 text-[#004d40]" />
                  <span className="text-xl font-medium text-[#004d40]">
                    Terms of service
                  </span>
                </span>
                <BiChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
