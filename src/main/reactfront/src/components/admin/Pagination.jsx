import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userReducer } from '../../redux/slices/userReducer';

function Pagination({ PageInfo }) {
  const [page, setPage] = useState(1);
  const pageDispatch = useDispatch();

  const handlePrevPage = () => {
    pageDispatch(userReducer.actions.handlePage(page));
    setPage((prev) => (prev - 1 === 0 ? 1 : prev - 1));
  };

  const handleAfterPage = () => {
    pageDispatch(userReducer.actions.handlePage(page));
    setPage((next) => (page === PageInfo?.totalPage ? PageInfo?.totalPage : next + 1));
  };

  const handlePageChange = (p) => {
    setPage(p);
    pageDispatch(userReducer.actions.handlePage(p));
  };

  console.log(PageInfo);

  return (
    <>
      <nav className="flex justify-center items-center m-16 rounded-1g font-[Poppins]">
        <button
          className="h-12 border-2 border-r-0 border-blue-800
               px-4 rounded-l-lg hover:bg-blue-800 hover:text-white"
          onClick={handlePrevPage}
        >
          &lt;
        </button>
        {Array(PageInfo?.totalPage)
          .fill()
          .map((_, i) => (
            <button
              className={`h-12 border-2 border-r-0 border-blue-800
               w-12 ${i + 1 === PageInfo?.currPage ? 'bg-blue-800 text-white' : ''}`}
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))
          .splice(0)
          .slice(PageInfo?.startPage === 0 ? 0 : PageInfo?.startPage - 1, PageInfo?.endPage - 1)}
        <button
          className="h-12 border-2  border-blue-800
               px-4 rounded-r-lg hover:bg-blue-800 hover:text-white"
          onClick={handleAfterPage}
        >
          &gt;
        </button>
      </nav>
    </>
  );
}

export default Pagination;
