import logo from '../assets/logo.svg'
import { NavLink } from './ui/nav-link'

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={logo} />

            <nav className='flex items-center gap-5'>
                <NavLink href="/events">Events</NavLink>
                <NavLink href="/participants">Participants</NavLink>
            </nav>
        </div>
    )
}