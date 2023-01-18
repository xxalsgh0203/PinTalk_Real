import Navbar from './Navbar';

const Layout = ({ children, title, page }) => {
  return (
    <section className={page === 'home' ? 'bg-slide-whitespace' : ''}>
      <Navbar title={title} page={page} />
      <main>{children}</main>
    </section>
  );
};
export default Layout;
