import { useRef } from 'react';
import { calculateMonthWithDay, calculateYear } from '../../../utils/calculateDatePicker';
import BirthSelector from './BirthSelector';

const BirthPicker = () => {
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
          <BirthSelector dateRange={yearRange} selectorRef={yearRef} name="년도" yearSize />
        </div>
        <div>
          <BirthSelector dateRange={monthRange} selectorRef={monthRef} name="월" />
        </div>
        <div>
          <BirthSelector dateRange={dayRange} selectorRef={dayRef} name="일" />
        </div>
      </div>
    </div>
  );
};

export default BirthPicker;
