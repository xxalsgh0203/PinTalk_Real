import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main>{children}</main>
    </section>
  );
};
export default Layout;
