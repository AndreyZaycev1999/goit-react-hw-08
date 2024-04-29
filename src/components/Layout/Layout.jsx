import css from "../../App.css";
import clsx from "slsx";
import { NavLink } from "react-router-dom";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <nav className={css.registration}>
          <NavLink className={css.home} to="/">
            Home
          </NavLink>
          <NavLink className={css.register} to="/register">
            Register
          </NavLink>
          <NavLink className={css.login} to="/login">
            Log In
          </NavLink>
          <NavLink className={css.contacts} to="/contacts">
            Contacts
          </NavLink>
        </nav>
      </header>
      <div className="navigation">
        <Navigation />
        <main>{children}</main>
      </div>
      <h1 className="title">
        Phonebook <FcContacts className="phonebook" />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Layout;
