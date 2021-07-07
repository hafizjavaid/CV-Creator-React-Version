import React from "react";
import { profileData } from "../ResumeData";
import Title from "./Shared/Title";
const Profile = () => {
  return (
    <section className="profile section" id="profile">
      <Title title={profileData.title}></Title>
      {profileData.descriptions.map((describe, i) => (
        <p key={i} className="profile__description">
          {describe}
        </p>
      ))}
    </section>
  );
};

export default Profile;
