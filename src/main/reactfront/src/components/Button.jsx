const Button = ({ title }) => {
  return (
    <button className='text-white py-1 px-6 rounded-lg bg-teal-700 hover:bg-teal-500 transition-colors text-lg w-full'>
      {title}
    </button>
  );
};

export default Button;
