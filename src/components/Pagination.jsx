import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = 3; // Number of pages to show in pagination

  const getPageNumbers = () => {
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    let pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-4">
      <nav className="flex items-center space-x-2">
        <button
          className={`px-4 py-2 border rounded ${
            currentPage === 1 ? "cursor-not-allowed text-gray-400" : "text-blue-500"
          }`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {getPageNumbers().map((page) => (
          <button
            key={page}
            className={`px-4 py-2 border rounded ${
              page === currentPage
                ? "bg-gray-500 text-white"
                : "text-gray-500 hover:bg-blue-100"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages ? "cursor-not-allowed text-gray-400" : "text-blue-500"
          }`}
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
