import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userReducer } from '../../redux/slices/userReducer';

function Pagination({ total, limit }) {
  const [page, setPage] = useState(1);
  const pageDispatch = useDispatch();
  const numPages = Math.ceil(total / limit);

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 === 0 ? 1 : prev - 1));
    pageDispatch(userReducer.actions.handlePage(page));
  };

  const handleAfterPage = () => {
    setPage((prev) => prev + 1);
    pageDispatch(userReducer.actions.handlePage(page));
  };

  return (
    <>
      <nav className="flex justify-center items-center gap-4 m-16">
        <button onClick={handlePrevPage}>&lt;</button>
        {/* {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </button>
          ))} */}
        <button onClick={handleAfterPage}>&gt;</button>
      </nav>
    </>
  );
}

export default Pagination;
