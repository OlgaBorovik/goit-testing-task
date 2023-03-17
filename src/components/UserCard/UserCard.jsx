import React, { useState, useEffect } from 'react';
import Boy from '../images/Boy.png';

const UserCard = ({ avatar, tweets }) => {
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem('followers')) ?? 100500;
  });

  console.log(followers);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const isFollowing = localStorage.getItem('isFollowing');

    if (isFollowing === 'true') {
      setIsFollowing(true);
    }
  }, []);

  const handleFollow = () => {
    localStorage.setItem('isFollowing', !isFollowing);

    setIsFollowing(prev => !prev);

    setFollowers(prev => prev + (isFollowing ? -1 : 1));
  
    localStorage.setItem('followers', JSON.stringify(followers));
    
  };

  return (
    <div>
      <img src={Boy} alt="Bob" />
      <p>{tweets} tweets</p>
      <p>{followers} followers</p>

      <button onClick={handleFollow} className={isFollowing ? 'following' : ''}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
