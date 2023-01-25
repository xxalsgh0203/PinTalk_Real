import Navbar from './navbar/Navbar';

const Layout = ({ children, title, home }) => {
  return (
    <section className="">
      <Navbar title={title} home={home} />
      <main>{children}</main>
    </section>
  );
};
export default Layout;
