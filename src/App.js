import React, { useState } from 'react'
import Tab from './components/Tab'
import TabContent from './components/TabContent'

const App = () => {

  const [activeTab,setActiveTab] = useState(0)

  return (
    <div className='app'>
        <Tab activeTab={activeTab}  setActiveTab={setActiveTab}/>
        <TabContent activeTab={activeTab}/>
    </div>
  )
}

export default App