import Announcement from './Announcement'
import { useState, useEffect } from 'react'

const Announcements = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => setMessages(data))
  }, [])

  if(messages.length === 0){
    return(
      <div>
        loading data...
      </div>
    )
  }
  return (
      <>
          <h3 className='text-xl font-bold text-usc-green' >ACADEMIC ANNOUNCEMENTS</h3>
              {
                  messages.map((message) => (
                      <Announcement key={message.id} message={message} />
                  ))
              }
      </>
  )
}

export default Announcements