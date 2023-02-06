import AdminNavbar from '../layout/navbar/AdminNavbar';

const AdminLayout = ({ children, title }) => {
  return (
    <section>
      <AdminNavbar title={title} />
      <main className="h-screen border-2 pt-20 bg-gray-100 px-2">{children}</main>
    </section>
  );
};

export default AdminLayout;
