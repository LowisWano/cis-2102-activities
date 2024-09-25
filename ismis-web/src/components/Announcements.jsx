import Announcement from './Announcement'
import { useState, useEffect } from 'react'

const Announcements = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setMessages(data))
  }, [])
  const inlineStyle = {
      color: "rgb(0, 92, 0)"
  }
  return (
      <>
          <h3 style={inlineStyle} >ACADEMIC ANNOUNCEMENTS</h3>
              {
                  messages.map((message) => (
                      <Announcement key={message.id} message={message} />
                  ))
              }
      </>
  )
}

export default Announcements