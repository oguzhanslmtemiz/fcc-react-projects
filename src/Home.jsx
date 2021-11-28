import React from "react";

export default function Home() {
  return (
    <div className="home">
      <p className="description">
        Welcome. This is my freeCodeCamp React Projects. These projects are made
        for the freeCodeCamp FrontEnd Libraries Certification.
      </p>
      <div className="github">
        <img
          alt="profile-pic"
          width="92"
          height="92"
          className="rounded-circle"
          src="https://avatars.githubusercontent.com/u/71596269?v=4"
        />
        <div className="user">
          <h4 className="user-name">Oguzhan Selim Temiz</h4>
          <small className="user-login">@oguzhanslmtemiz</small>
          <a
            target="_blank"
            rel="noreferrer"
            className="btn"
            href="https://github.com/oguzhanslmtemiz"
          >
            Go to GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
