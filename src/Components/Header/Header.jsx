import { useState, useEffect } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // To detect route changes

  // Close the menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to the top when route changes
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          الاناقة
        </Link>

        {/* Menu Icon for smaller screens */}
        {!menuOpen && (
          <BsList
            className="menu"
            onClick={toggleMenu}
            aria-label="Open menu"
          />
        )}

        {/* Cancel Icon when the menu is open */}
        {menuOpen && (
          <MdCancel
            className="cancel"
            onClick={toggleMenu}
            aria-label="Close menu"
          />
        )}

        {/* Navigation Links */}
        <nav className={menuOpen ? "nav-open" : ""}>
          <Link to="/home" onClick={toggleMenu}>
            الرئيسية
          </Link>
          <Link to="/man" onClick={toggleMenu}>
            رجالي
          </Link>
          <Link to="/women" onClick={toggleMenu}>
            نسائي
          </Link>
          <Link to="/kids" onClick={toggleMenu}>
            اطفال
          </Link>
          <Link to="/shoes" onClick={toggleMenu}>
            احذية
          </Link>
          <Link to="/accessories" onClick={toggleMenu}>
            اكسسوارات
          </Link>
          <Link to="/cart" onClick={toggleMenu}>
            <FaShoppingCart aria-label="Shopping Cart" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
