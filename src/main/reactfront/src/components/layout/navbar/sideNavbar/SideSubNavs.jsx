import { useState } from 'react';
import { AiOutlineUp } from 'react-icons/ai';
import cls from '../../../../utils/cls';
import SideSubNavItems from './SideSubNavItems';

const SideSubNavs = ({ title, id }) => {
  const [isActive, setIsActive] = useState(false);
  const [target, setTarget] = useState('');

  const handleActiveItem = (e) => {
    setTarget(e.currentTarget.id);
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <li className="flex flex-col mb-6" key={id}>
        <div className="flex items-center">
          <span className="inline-block p-3 pl-8 w-[30%] text-lg text-gray-500 font-bold">
            {title}
          </span>
          <span
            onClick={(e) => handleActiveItem(e)}
            id={title}
            className="inline-block px-1 cursor-pointer"
          >
            <span
              className={cls(
                isActive ? 'rotate-180' : 'rotate-0',
                'flex transition-all text-gray-500 hover:text-gray-400 items-center',
              )}
            >
              <AiOutlineUp size={20} />
            </span>
          </span>
        </div>
        <div>
          <div>
            <SideSubNavItems target={target} isActive={isActive} />
          </div>
        </div>
      </li>
    </>
  );
};
export default SideSubNavs;
