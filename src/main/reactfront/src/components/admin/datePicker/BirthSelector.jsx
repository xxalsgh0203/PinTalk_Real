import cls from '../../../utils/cls';

const BirthSelector = ({ selectorRef, dateRange, name, yearSize }) => {
  return (
    <select
      ref={selectorRef}
      className={cls('py-1 absolute z-10 shadow-sm', yearSize ? 'w-[24%]' : 'w-[20%]')}
      onFocus={() => {
        selectorRef.current.size = 10;
      }}
      onBlur={() => {
        selectorRef.current.size = 1;
      }}
      onChange={() => {
        selectorRef.current.size = 1;
        selectorRef.current.blur();
      }}
    >
      <option className="" value="">
        {name}
      </option>
      {dateRange.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
export default BirthSelector;
