import React from "react";
import { FaUser, FaHistory } from "react-icons/fa";
import { BiVolume, BiShield } from "react-icons/bi";
import { LuSmilePlus, LuShare2 } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const ProfileButton = ({ icon: Icon, text, link, additionalClass = "" }) => {
  return (
    <Link to={link} className="block">
      <button
        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-darkBeige ${additionalClass}`}
      >
        <span className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-darkGreen" />
          <span className="text-xl font-medium text-darkGreen">{text}</span>
        </span>
        <BiChevronRight className="h-5 w-5 text-coreGray" />
      </button>
    </Link>
  );
};

function Profile() {
  return (
    <div className="h-full w-full border border-r-neutral-300 bg-beige lg:w-96">
      <div className="p-6">
        <div className="mx-auto max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold text-darkGreenHigh">Anurag</h1>

          <div className="space-y-2">
            <ProfileButton icon={FaUser} text="Account" link="/account" />
            <ProfileButton
              icon={FaHistory}
              text="Manage history"
              link="/profile/history"
            />
            <ProfileButton
              icon={BiVolume}
              text="Voice settings"
              link="/voice"
            />
            <ProfileButton
              icon={LuSmilePlus}
              text="Give feedback"
              link="/feedback"
            />
            <ProfileButton
              icon={LuShare2}
              text="Share Pi with others"
              link="/share"
            />
          </div>

          <hr className="my-4 border-t border-coreGray" />

          <ProfileButton
            icon={FaDiscord}
            text="Join our Discord community"
            link="/discord"
            // todo: add target plank, actuall link
          />

          <hr className="my-4 border-t border-coreGray" />

          <div className="space-y-2">
            <ProfileButton
              icon={BiShield}
              text="Privacy policy"
              link="/privacy"
            />
            <ProfileButton
              icon={FiFileText}
              text="Terms of service"
              link="/terms"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
