import { Link } from "react-router-dom"


function NavBar() {
    return (
        <nav>
            <li>
                    <Link
                        to='/about'
                    >
                        Jennifer Juarez
                    </Link>
                </li>
            <ul>
                <li>
                    <Link
                        to='/about'
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        to='/contact'
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to='/projects'
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to='/resume'
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;