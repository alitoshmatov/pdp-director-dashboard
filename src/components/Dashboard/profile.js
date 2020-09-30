import React from "react";
import { TextMedium16 } from "./texts";
import { AvatarIcon, NotificationIcon } from "../icons";

function Profile() {
  return (
    <div className="profile flex-row">
      <TextMedium16 content="Odilbek Mirzaev" />
      <AvatarIcon />
      <NotificationIcon />
    </div>
  );
}

export default Profile;
