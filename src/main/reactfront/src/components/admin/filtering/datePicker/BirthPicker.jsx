import { useRef } from 'react';
import { calculateMonthWithDay, calculateYear } from '../../../../utils/calculateDatePicker';
import { inputSetValues } from '../../../../utils/validateForm';
import BirthSelector from './BirthSelector';

const BirthPicker = ({ register }) => {
  const yearRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();
  const yearRange = calculateYear();
  const monthRange = calculateMonthWithDay(12);
  const dayRange = calculateMonthWithDay(31);

  return (
    <div className="mb-2 relative">
      <label className="text-sm font-bold">생년월일</label>
      <div className="mt-2 relative w-full flex space-x-4">
        {/* 년 */}
        <div className="">
          <BirthSelector
            register={register('year', {
              onChange: (e) => {
                e.target.size = 1;
                e.target.blur();
              },
              onBlur: (e) => {
                return (e.target.size = 1);
              },
              setValueAs: (v) => inputSetValues(v),
            })}
            selectorRef={yearRef}
            dateRange={yearRange}
            title="년"
            yearSize
          />
        </div>
        {/* 월 */}
        <div className="flex items-center">
          <BirthSelector
            register={register('month', {
              onChange: (e) => {
                e.target.size = 1;
                e.target.blur();
              },
              onBlur: (e) => {
                return (e.target.size = 1);
              },
              setValueAs: (v) => inputSetValues(v),
            })}
            dateRange={monthRange}
            selectorRef={monthRef}
            title="월"
          />
        </div>
        {/* 일 */}
        <BirthSelector
          register={register('day', {
            onChange: (e) => {
              e.target.size = 1;
              e.target.blur();
            },
            onBlur: (e) => {
              return (e.target.size = 1);
            },
            setValueAs: (v) => inputSetValues(v),
          })}
          dateRange={dayRange}
          selectorRef={dayRef}
          title="일"
        />
      </div>
    </div>
  );
};

export default BirthPicker;
