import React from 'react';
import { styles } from '../utils/styles';

interface ProfileProps {
  user: {
    name: string;
    title: string;
    avatar: string;
    slogan: string;
  };
  isDarkMode: boolean;
}

const Profile: React.FC<ProfileProps> = ({ user, isDarkMode }) => {
  return (
    <div className="flex flex-col items-center py-8 px-5" style={styles.profile(isDarkMode)}>
      <div className="flex items-center mb-4">
        <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full mr-4" style={styles.avatar(isDarkMode)} />
        <h1 className="text-2xl font-bold" style={styles.name(isDarkMode)}>{user.name}</h1>
      </div>
      <p className="text-base mb-2 text-center" style={styles.title(isDarkMode)}>{user.title}</p>
      <p className="text-base italic text-center" style={styles.slogan(isDarkMode)}>{user.slogan}</p>
    </div>
  );
};

export default Profile;