import React from 'react';
import { Hexagon, QrCode, Share } from 'lucide-react';
import { styles } from '../utils/styles';

interface HeaderProps {
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4" style={styles.header(isDarkMode)}>
      <div className="flex items-center">
        <div className="relative w-8 h-8 mr-2">
          <Hexagon 
            size={30} 
            color={isDarkMode ? "#00ffff" : "#000000"} 
            fill="none" 
            strokeWidth={isDarkMode ? 2 : 1}
          />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xs" style={{ color: isDarkMode ? '#000000' : '#ffffff' }}>
            B
          </span>
        </div>
        <span className="font-black text-xl tracking-wide" style={styles.brandName(isDarkMode)}>BEAM</span>
      </div>
      <div>
        <button className="p-3 rounded-full transition-all duration-300 hover:bg-opacity-20" style={styles.iconButton(isDarkMode)} title="Show QR Code">
          <QrCode size={20} />
        </button>
        <button className="p-3 rounded-full transition-all duration-300 hover:bg-opacity-20" style={styles.iconButton(isDarkMode)} title="Share Beam Card">
          <Share size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;