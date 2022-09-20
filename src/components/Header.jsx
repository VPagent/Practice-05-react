import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <header>
            <Link to='/'>Home</Link>
            <Link to='/hero-list-page'>Hero list</Link>
        </header>
    )
}
export default Header