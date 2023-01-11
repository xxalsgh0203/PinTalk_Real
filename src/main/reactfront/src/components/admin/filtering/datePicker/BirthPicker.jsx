import { useRef } from 'react';
import { calculateMonthWithDay, calculateYear } from '../../../../utils/calculateDatePicker';
import BirthSelector from './BirthSelector';

const BirthPicker = ({ register }) => {
  const yearRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();
  const yearRange = calculateYear();
  const monthRange = calculateMonthWithDay(12, '월');
  const dayRange = calculateMonthWithDay(31, '일');

  return (
    <div className="mb-6 md:mb-0 relative">
      <label className="text-sm">생년월일</label>
      <div className="relative w-full flex space-x-32 sm:space-x-44 md:space-x-28 lg:space-x-24 2xl:space-x-28">
        <div className="mr-10 sm:mr-4 md:mr-6 lg:mr-4 xl:mr-4 2xl:mr-6">
          <BirthSelector
            register={register('year', {
              onChange: (e) => {
                console.log(e);
                e.target.size = 1;
                e.target.blur();
              },
              onBlur: (e) => {
                return (e.target.size = 1);
              },
            })}
            selectorRef={yearRef}
            dateRange={yearRange}
            title="년도"
            yearSize
          />
        </div>
        <div>
          <BirthSelector
            register={register('month', {
              onChange: (e) => {
                e.target.size = 1;
                e.target.blur();
              },
              onBlur: (e) => {
                return (e.target.size = 1);
              },
            })}
            dateRange={monthRange}
            selectorRef={monthRef}
            title="월"
          />
        </div>
        <div>
          <BirthSelector
            register={register('day', {
              onChange: (e) => {
                e.target.size = 1;
                e.target.blur();
              },
              onBlur: (e) => {
                return (e.target.size = 1);
              },
            })}
            dateRange={dayRange}
            selectorRef={dayRef}
            title="일"
          />
        </div>
      </div>
    </div>
  );
};

export default BirthPicker;
