import { useState } from "react";
import "./NavBar.scss";
import { motion, Variants } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(true);
  let clasName = isMenuActive ? "menu-btn" : "menu-btn active";

  const navigate = useNavigate();
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const navBarList = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About us",
      href: "#about",
    },
    {
      title: "Wiki",
      href: "#discover-container",
    },
  ];

  let handleToggle = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <div id="nav-bar">
      <div>
        <i className="bx bx-leaf" id="logo" />
        <h2>Wikiseed</h2>
      </div>
      <div id="mobileM">
        <motion.div
          onClick={handleToggle}
          className={clasName}
          id={"hamburger"}
        >
          <div className="menu-btn__burguer" id="nav-mobile"></div>
        </motion.div>
        <motion.nav
          initial={isMenuActive}
          animate={isMenuActive ? "closed" : "open"}
          className="menu"
        >
          <motion.ul
            className="nav-container"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isMenuActive ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>Home </motion.li>
            <motion.li variants={itemVariants}>Contact us </motion.li>
            <motion.li variants={itemVariants}>Discover </motion.li>
            <motion.li variants={itemVariants}>Support us </motion.li>
          </motion.ul>
        </motion.nav>
      </div>

      <ul id="navbar-desktop">
        {navBarList.map((e, i) => (
          <li key={i}>
            <a href={e.href}>{e.title}</a>
          </li>
        ))}
        <li>
          <Link to="/wikiseed/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
