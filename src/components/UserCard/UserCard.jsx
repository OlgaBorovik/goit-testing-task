import React, { useState, useEffect } from 'react';
import Boy from '../images/Boy.png';

const UserCard = ({ avatar, tweets }) => {
  const [followers, setFollowers] = useState(() => {
    const savedFollowers = localStorage.getItem('followers');
    return Number(savedFollowers) ;
  });
  const [followStatus, setFollowStatus] = useState(true);

  const increaseFollowers = () => {
    setFollowers(followers + 1);
    localStorage.setItem('followers', JSON.stringify(followers));
    setFollowStatus(false);
  };

  const decreaseFollowers = () => {
    setFollowers(followers - 1);
    localStorage.setItem('followers', JSON.stringify(followers));
    setFollowStatus(true);
  };


  return (
    <div>
      <img src={Boy} />
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>
      {followStatus ? (
        <button type="button" onClick={increaseFollowers}>
          Follow
        </button>
      ) : (
        <button type="button" onClick={decreaseFollowers}>
          Following
        </button>
      )}

      
    </div>
  );
};

export default UserCard;
