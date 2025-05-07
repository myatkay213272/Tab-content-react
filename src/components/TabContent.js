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

  const [showDetail,setShowDetail] = useState(true)
  const [likes,setLikes] = useState(0)
  const handleDetailToggle = ()=>{
    setShowDetail(!showDetail)
  }

  const content = contents[activeTab]
  
  const handleInc = ()=>{
    setLikes((likes)=>likes + 1)
  }


  const handleTripleInc=()=>{

    // setLikes(likes + 1)  0+1 =1
    // setLikes(likes + 1)  0+1 =1
    // setLikes(likes + 1)  0+1 =1

    setLikes((likes)=>likes+1) // 0+1
    setLikes((likes)=>likes+1) // 1+1
    setLikes((likes)=>likes+1) //2+1

  }

  const handleUndo = ()=>{
    setShowDetail(true)
    setLikes(0)
  }

  const handleUndoLater = ()=>{
    setTimeout(handleUndo,2000)
  }

  return (
    <div className='content-box'>

      <h3>React is a librry for building UIs</h3>

      {showDetail && <p>{content.description}</p>}

      <div className='detail'>
      <a href="#"
        onClick={handleDetailToggle}
      >
        {showDetail ? "Hide" : "Show"} details
      </a>

      <div className='likes'>
        <span>{likes} 💖</span>
        <button onClick={handleInc}>+</button>
        <button onClick={handleTripleInc}>+++</button>
      </div>
      </div>


      <div className='actions'>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>


     


    </div>
  )
}

export default TabContent
    