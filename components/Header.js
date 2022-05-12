import headstyles from '../styles/Header.module.css'

function Header() {
  return (
    <div className={headstyles.title}>
        <h1><span>Web Dev</span>News</h1>
        <p className={headstyles.description}>Keep Up with the latest web Dev News , Web Development is cool!!</p>
    </div>
  )
}

export default Header