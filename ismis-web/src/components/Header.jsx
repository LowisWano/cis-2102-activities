import '../styles/style.css'

const Header = () => {
    const imgStyle = {
        height: '90px'
    }
    return (
        <>
            <header className='header' >
                <img style={imgStyle} src="/usc3.jfif" alt="usc logo" />
            </header>
        </>
    )
}

export default Header