
const Announcement = ({ message }) => {
    return (
        <>
            <div className='shadow-lg transition duration-300 rounded-md p-2' >
                <h3 className="heading">{message.name}</h3>
                <p className=" text-gray-500">Author: {message.email}</p>
                <p className=" text-gray-500">Post id: {message.postId}</p>
                <p>{message.body}</p>
            </div>
        </>
    )
}
export default Announcement