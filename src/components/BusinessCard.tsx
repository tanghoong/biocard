import React, { useState, useEffect } from 'react';
import Header from './Header';
import Profile from './Profile';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
import mockData from '../data/mockData';
import { styles } from '../utils/styles';

const BusinessCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('About');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [data, setData] = useState(mockData);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => setData(mockData), 100);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-start p-5" style={styles.appContainer(isDarkMode)}>
      <div className="w-full max-w-md h-[88vh] rounded-3xl overflow-hidden shadow-lg flex flex-col" style={styles.container(isDarkMode)}>
        <Header isDarkMode={isDarkMode} />
        <Profile user={data.user} isDarkMode={isDarkMode} />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
        <Content activeTab={activeTab} data={data} isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
    </div>
  );
};

export default BusinessCard;