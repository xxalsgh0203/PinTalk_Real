import logo from '../../asset/pinbank_icon.png';

const LoginTitle = ({ title }) => {
  return (
    <>
      <div className="flex items-end mb-10 absolute top-10">
        <img className="w-12 h-12" src={logo} alt="logo" />
        <h1 className="uppercase font-bold text-pintalk-dark-yellow text-2xl">intalk</h1>
      </div>
      <h1 className="font-extrabold text-transparent text-3xl bg-gradient-to-r from-amber-300 to-amber-600 bg-clip-text h-16 mb-6">
        {title}
      </h1>
    </>
  );
};
export default LoginTitle;
