import React, { useState } from 'react'

const TabContent = ({activeTab}) => {

    const contents = [
        {
          title: "React is a library for building UIs",
          description: "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          title: "Tab 2 Content",
          description: "This is the content for Tab 2. You can place any custom data here related to your application."
        },
        {
          title: "Tab 3 Content",
          description: "Here is Tab 3's unique content. Useful for separating sections or steps."
        },
        {
          title: "Tab 4 Content",
          description: "Welcome to Tab 4. This is often used for settings, about pages, or contact information."
        }
      ];

    const [showdetail,setShowDetail] = useState(true)
    const handleDetailToggle= (e)=>{
      e.preventDefault();
      setShowDetail(!showdetail)
    }

    const content = contents[activeTab]
  return (
    <div className='content-box'>
      <h3>React is a library for building UIs</h3>
       
      {showdetail && <p>{content.description}</p>}

        <a href='#' onClick={handleDetailToggle}>
          {showdetail ? 'Hide details' : 'Show details'}
        </a>
       
    </div>
  )
}

export default TabContent