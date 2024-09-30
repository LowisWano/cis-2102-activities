import Announcement from './Announcement'
import { useState, useEffect } from 'react'

const Announcements = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => setMessages(data))
  }, [])
  const inlineStyle = {
      color: "rgb(0, 92, 0)"
  }
  return (
      <>
          <h3 style={inlineStyle} className='text-xl font-bold' >ACADEMIC ANNOUNCEMENTS</h3>
              {
                  messages.map((message) => (
                      <Announcement key={message.id} message={message} />
                  ))
              }
      </>
  )
}

export default Announcements