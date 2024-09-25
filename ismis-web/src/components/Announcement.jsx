import '../styles/style.css'

// helloooo
const Announcement = ({ message }) => {
    return (
        <>
            <div className='card' >
                <h3>{message.title}</h3>
                <p>{message.body}</p>
            </div>
        </>
    )
}
export default Announcement