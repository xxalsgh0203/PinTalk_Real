import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/slices/userSlice';
import cls from '../../utils/cls';

function Pagination({ PageInfo }) {
  const pageDispatch = useDispatch();

  const handlePrevPage = () => {
    pageDispatch(userSlice.actions.handlePage(PageInfo?.currPage - 1));
  };

  const handleAfterPage = () => {
    pageDispatch(userSlice.actions.handlePage(PageInfo?.currPage + 1));
  };

  const handlePageChange = (p) => {
    pageDispatch(userSlice.actions.handlePage(p));
  };

  return (
    <>
      <nav className="flex justify-center items-center m-16 rounded-1g font-[Poppins]">
        <button
          className="mr-3 sm:mr-6 hover:font-bold p-1 cursor-pointer hover:scale-110 transition-all text-gray-500 hover:text-pintalk-dark-brown"
          disabled={PageInfo?.currPage - 1 === 0}
          onClick={handlePrevPage}
        >
          &lt;
        </button>
        <div className="sm:space-x-4">
          {Array(PageInfo?.totalPage)
            .fill()
            .map((_, i) => (
              <button
                className={cls(
                  'w-6 h-6 sm:w-8 sm:h-8 text-sm sm:text-xl font-bold',
                  i + 1 === PageInfo?.currPage
                    ? 'bg-pintalk-dark-yellow text-white rounded-full'
                    : 'hover:text-gray-400 transition-all',
                )}
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))
            .splice(0)
            .slice(PageInfo?.startPage === 0 ? 0 : PageInfo?.startPage - 1, PageInfo?.endPage - 1)}
        </div>
        <button
          className="ml-3 sm:ml-6 hover:font-bold p-1 cursor-pointer hover:scale-110 transition-all text-gray-500 hover:text-pintalk-dark-brown"
          disabled={PageInfo?.currPage + 1 === PageInfo?.totalPage}
          onClick={handleAfterPage}
        >
          &gt;
        </button>
      </nav>
    </>
  );
}

export default Pagination;
