import cls from '../../utils/cls';

const LoginButton = ({ title, isValid }) => {
  return (
    <button
      disabled={!isValid}
      className={cls(
        'w-full bg-amber-600 text-white p-1 text-lg font-bold flex justify-center items-center rounded-lg ',
        isValid ? 'hover:bg-amber-500 transition-all cursor-pointer' : 'opacity-40',
      )}
    >
      {title}
    </button>
  );
};
export default LoginButton;
