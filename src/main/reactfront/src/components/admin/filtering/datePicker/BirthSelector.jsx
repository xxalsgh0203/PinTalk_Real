import cls from '../../../../utils/cls';

const BirthSelector = ({ selectorRef, dateRange, title, yearSize, register }) => {
  const { ref, ...rest } = { ...register };

  return (
    <select
      defaultValue=""
      ref={(e) => {
        ref(e);
        selectorRef.current = e;
      }}
      {...rest}
      className={cls(
        'py-1 absolute z-10 shadow-sm bg-clip-padding',
        yearSize ? 'w-[24%]' : 'w-[20%]',
      )}
      onFocus={() => {
        selectorRef.current.size = 10;
      }}
    >
      <option disabled value="">
        {title}
      </option>
      {dateRange.map((item) => (
        <option className="hover:bg-gray-50 cursor-pointer" value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
export default BirthSelector;
