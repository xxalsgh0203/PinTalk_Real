import Navbar from './Navbar';

const Layout = ({ children, title }) => {
  return (
    <section>
      <Navbar title={title} />
      <main>{children}</main>
    </section>
  );
};
export default Layout;
