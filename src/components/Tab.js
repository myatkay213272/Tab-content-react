import React from 'react';

const Tab = ({ activeTab, setActiveTab }) => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

  return (
    <div className='tabs'>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={activeTab === index ? 'tab active' : 'tab'}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
