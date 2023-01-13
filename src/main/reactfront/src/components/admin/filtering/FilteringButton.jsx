import cls from '../../../utils/cls';

const FilteringButton = ({ handleButton, title, type }) => {
  return (
    <button
      className={cls(
        'px-4 py-2 text-white-800  rounded-lg bg-opacity-50 hover:bg-stone-200 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10 w-[30%] md:w-[15%] lg:w-[10%]',
        type === 'button' ? 'bg-pintalk-light-yellow' : 'bg-pintalk-dark-yellow',
      )}
      type={type}
      onClick={handleButton}
    >
      <span className="uppercase">{title}</span>
    </button>
  );
};
export default FilteringButton;
