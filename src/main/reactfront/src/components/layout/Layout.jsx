import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
};
export default Layout;
