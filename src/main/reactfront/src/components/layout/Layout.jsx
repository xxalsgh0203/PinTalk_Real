import Navbar from './Navbar';

const Layout = ({ children, title, page }) => {
  return (
    <section className={page === 'home' ? 'bg-slide-whitespace' : ''}>
      <Navbar title={title} />
      <main>{children}</main>
    </section>
  );
};
export default Layout;
