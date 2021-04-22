import c from './Navbar.module.css';
console.log(c);
const Navbar = () => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <a>Profile</a>
        </div>
        <div className={`${c.item} ${c.active}`}>
            <a>Messages</a>
        </div>
        <div className={c.item}>
            <a>News</a>
        </div>
        <div className={c.item}>
            <a>Music</a>
        </div>
        <div className={c.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;

