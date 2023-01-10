import { useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { getMonth, getYear } from 'date-fns';
const _ = require('lodash');

const DatePicker = ({ label }) => {
  const [startDate, setStartDate] = useState(0);
  const years = _.range(1900, getYear(new Date()), 1);
  const selectRef = useRef();
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const handleClick = (e, monthHandler) => {
    e.preventDefault();
    monthHandler();
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="reg_date" className="font-medium text-sm text-stone-600 mb-2">
        {label}
      </label>
      <div className="shadow-sm">
        <ReactDatePicker
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          onChange={(date) => setStartDate(date)}
          selected={startDate}
          startDate={startDate}
          placeholderText={label}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="custom-react-datepicker__select-wrapper flex items-center justify-center space-x-2">
              <button
                onClick={(e) => handleClick(e, decreaseMonth)}
                disabled={prevMonthButtonDisabled}
              >
                {'<'}
              </button>
              <div className="custom-react-datepicker__select-item relative space-x-16 ">
                <select
                  className="w-14 mr-2 absolute"
                  ref={selectRef}
                  value={getYear(date)}
                  onFocus={() => {
                    selectRef.current.size = 10;
                  }}
                  onBlur={() => {
                    selectRef.current.size = 1;
                  }}
                  onChange={({ target: { value } }) => {
                    selectRef.current.blur();
                    changeYear(Number(value));
                  }}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>년</span>
              </div>
              <div className="custom-react-datepicker__select-item">
                {/* 월 선택 select box */}
                <select
                  className="w-10 mr-2"
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>월</span>
              </div>
              {/* 다음 월로 이동하는 버튼 */}
              <button
                onClick={(e) => handleClick(e, increaseMonth)}
                disabled={nextMonthButtonDisabled}
              >
                {'>'}
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};
export default DatePicker;
