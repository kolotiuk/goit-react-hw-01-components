import Profile from 'components/Profile/Profile';
import user from '../../data/user';

const Main = () => {
  return (
    <main>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </main>
  );
};

export default Main;
