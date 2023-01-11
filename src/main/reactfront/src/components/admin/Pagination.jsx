import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userReducer } from '../../redux/slices/userReducer';

function Pagination({ PageInfo }) {
  const pageDispatch = useDispatch();

  const handlePrevPage = () => {
    pageDispatch(userReducer.actions.handlePage(PageInfo?.currPage - 1));
  };

  const handleAfterPage = () => {
    pageDispatch(userReducer.actions.handlePage(PageInfo?.currPage + 1));
  };

  const handlePageChange = (p) => {
    pageDispatch(userReducer.actions.handlePage(p));
  };

  return (
    <>
      <nav className="flex justify-center items-center m-16 rounded-1g font-[Poppins]">
        <button
          className="h-9 bg-bg-slate-400 text-slate-400
               px-4 rounded-l-lg hover:bg-pintalk-dark-brown hover:text-white"
          disabled={PageInfo?.currPage - 1 === 0}
          onClick={handlePrevPage}
        >
          &lt;
        </button>
        {Array(PageInfo?.totalPage)
          .fill()
          .map((_, i) => (
            <button
              className={`h-9 text-1xl rounded
               w-12 hover:bg-pintalk-dark-brown hover:text-white${
                 i + 1 === PageInfo?.currPage
                   ? 'text-white text-decoration-line: underline bg-pintalk-dark-brown'
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
          className="h-9 bg-bg-slate-400 text-slate-400
               px-4 rounded-r-lg hover:bg-pintalk-dark-brown hover:text-white"
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
