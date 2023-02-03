import AdminNavbar from './navbar/AdminNavbar';
import Navbar from './navbar/Navbar';

const Layout = ({ children, title, admin }) => {
  return (
    <section className="">
      {admin ? <AdminNavbar /> : <Navbar title={title} />}
      <main>{children}</main>
    </section>
  );
};
export default Layout;
