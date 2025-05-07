import React, { useState } from 'react'
import TabContent from './components/TabContent'
import Tab from './components/Tab'

const App = () => {

  const [activeTab,setActiveTab] = useState(0)

  return (
    
   <div className='app'>

      <Tab  activeTab={activeTab} setActiveTab={setActiveTab}/>
      <TabContent activeTab={activeTab}/>
    
   </div>

  )
}

export default App
