import Layout from '../layout/Layout';

const LoginLayout = ({ children }) => {
  return (
    <Layout page="login">
      <div className="flex justify-center items-center min-h-screen px-2 bg-gradient-to-t from-amber-500">
        {children}
      </div>
    </Layout>
  );
};
export default LoginLayout;
