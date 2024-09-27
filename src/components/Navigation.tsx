import React from 'react';
import { styles } from '../utils/styles';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab, isDarkMode }) => {
  const tabs = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="flex overflow-x-auto whitespace-nowrap" style={styles.nav(isDarkMode)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-3 text-base transition-all duration-300 relative ${activeTab === tab ? 'font-bold' : ''}`}
          style={{
            ...styles.navButton(isDarkMode),
            ...(activeTab === tab ? styles.activeNavButton(isDarkMode) : {}),
          }}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;