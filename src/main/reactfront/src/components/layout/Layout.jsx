import AdminNavbar from './navbar/AdminNavbar';
import Navbar from './navbar/Navbar';

const Layout = ({ children, title }) => {
  return (
    <section>
      <Navbar title={title} />
      <main>{children}</main>
    </section>
  );
};
export default Layout;
