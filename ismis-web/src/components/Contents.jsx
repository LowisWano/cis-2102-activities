
import Announcements from './Announcements'
import ManageAccount from './ManageAccount'

const Contents = () => {
    return(
        <>
            <main className='p-5 flex flex-col gap-5' >
                <ManageAccount />
                <Announcements/>
            </main>
        </>
    )
}

export default Contents