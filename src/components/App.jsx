import UserCard from './UserCard/UserCard';
import { Box } from './UserCard/UserCard.styled'

export const App = () => {
  const user = {
    avatar: '../components/images/Boy.png',
    followers: 100500,
    tweets: 777,
  };

  return (
    <Box>
      <UserCard user={user}/>
    </Box>
  );
};
