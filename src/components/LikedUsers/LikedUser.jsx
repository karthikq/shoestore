/** @format */

import React from "react";

const LikedUser = ({ avatar, name }) => {
  return (
    <div className="selproduct-likes_user">
      <img
        src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="err"
      />
      <span>{name}</span>
    </div>
  );
};

export default LikedUser;
