import { BiTransferAlt } from 'react-icons/bi';
import { AiOutlineAccountBook, AiFillCheckCircle } from 'react-icons/ai';

const SubNavbar = ({ id, title }) => {
  return (
    <div
      key={id}
      className="h-full w-60 rounded-lg relative cursor-pointer shadow-lg hover:opacity-60 transition-all"
    >
      <div className="z-10 w-full absolute flex flex-col items-center justify-center h-full space-y-4">
        <div className="">
          {id === 'allAccount' && (
            <div className="text-teal-600">
              <AiOutlineAccountBook size={40} />
            </div>
          )}

          {id === 'transfer' && (
            <div className="text-orange-600">
              <BiTransferAlt size={40} />
            </div>
          )}

          {id === 'transferList' && (
            <div className="text-sky-500">
              <AiFillCheckCircle size={40} />
            </div>
          )}
        </div>
        <div>
          <h1 className="text-black font-bold text-xl">{title}</h1>
        </div>
      </div>
      <div className="rounded-lg absolute w-full h-full bg-white bg-gradient-to-t from-amber-400 opacity-70 bottom-0 hover:opacity-20 transition-all" />
    </div>
  );
};
export default SubNavbar;
