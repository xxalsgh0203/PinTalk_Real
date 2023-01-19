const LoginButton = ({ title }) => {
  return (
    <button className="w-full bg-amber-600 text-white p-1 text-lg font-bold flex justify-center items-center rounded-lg hover:bg-amber-500 transition-all cursor-pointer">
      {title}
    </button>
  );
};
export default LoginButton;
