import navstyle from '../styles/Nav.module.css'
import Link from 'next/link'
function Nav() {
  return (
    <div className={navstyle.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>

            <li>
                <Link href='/about'>About</Link>
            </li>
        </ul>
        </div>
  )
}

export default Nav