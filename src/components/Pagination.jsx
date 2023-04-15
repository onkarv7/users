const Pagination = ({ currentPage, pageCount, handlePageChange }) => {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div>
      {pages.map((page) => (
        <button
          className="pagination"
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
