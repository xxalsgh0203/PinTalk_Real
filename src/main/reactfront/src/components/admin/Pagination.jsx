import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userReducer } from '../../redux/slices/userReducer';

function Pagination({ PageInfo }) {
  const [page, setPage] = useState(1);
  const pageDispatch = useDispatch();

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 === 0 ? 1 : prev - 1));
    pageDispatch(userReducer.actions.handlePage(page));
  };

  const handleAfterPage = () => {
    setPage(page + 1 === PageInfo?.totalPage ? PageInfo?.totalPage : page + 1);
    pageDispatch(userReducer.actions.handlePage(page));
  };

  const handlePageChange = (p) => {
    setPage(p);
    pageDispatch(userReducer.actions.handlePage(p));
  };

  return (
    <>
      <nav className="flex justify-center items-center m-16 rounded-1g font-[Poppins]">
        <button
          className="h-12 bg-bg-slate-400 text-slate-400
               px-4 rounded-l-lg hover:bg-kukmin-dark-brown hover:text-white"
          onClick={handlePrevPage}
        >
          &lt;
        </button>
        {Array(PageInfo?.totalPage)
          .fill()
          .map((_, i) => (
            <button
              className={`h-12 text-kukmin-dark-brown text-2xl
               w-12 ${
                 i + 1 === PageInfo?.currPage
                   ? 'text-kukmin-dark-brown text-decoration-line: underline'
                   : ''
               }`}
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))
          .splice(0)
          .slice(PageInfo?.startPage === 0 ? 0 : PageInfo?.startPage - 1, PageInfo?.endPage - 1)}
        <button
          className="h-12 bg-bg-slate-400 text-slate-400
               px-4 rounded-r-lg hover:bg-kukmin-yellow2 hover:text-white"
          onClick={handleAfterPage}
        >
          &gt;
        </button>
      </nav>
    </>
  );
}

export default Pagination;
