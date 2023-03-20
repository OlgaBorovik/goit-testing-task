import React, { useState, useEffect } from 'react';
import Boy from '../images/Boy.png';
import picture from '../images/picture2.png';
import logo from '../images/Logo.png';

import {
  CardBox,
  PictureBox,
  Logo,
  Picture,
  Divider,
  Avatar,
  InfoBox,
  Text,
  Button,
} from './UserCard.styled';

const UserCard = ({ user }) => {
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem('followers')) ?? user.followers;
  });

  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem('isFollowing')) ?? false;
  });

  useEffect(() => {
    localStorage.setItem('isFollowing', isFollowing);
    localStorage.setItem('followers', JSON.stringify(followers));
  }, [isFollowing, followers]);

  const handleFollow = () => {
    setFollowers(prev => prev + (isFollowing ? -1 : 1));
    setIsFollowing(prev => !prev);
  };

  return (
    <CardBox>
      <Logo src={logo} alt="logo" />
      <PictureBox>
        <Picture src={picture} alt="Goit" />
      </PictureBox>
      <Divider>
        <Avatar src={Boy} alt="Bob" />
      </Divider>
      <InfoBox>
        <Text>{user.tweets} tweets</Text>
        <Text>{new Intl.NumberFormat('en-US').format(followers)} followers</Text>

        <Button
          onClick={handleFollow}
          className={isFollowing ? 'following' : ''}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </InfoBox>
    </CardBox>
  );
};

export default UserCard;
