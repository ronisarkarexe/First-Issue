import Link from "next/link";
import React from "react";

const ReportButton = () => {
  return (
    <Link
      href="https://github.com/ronisarkarexe/First-Issue/issues"
      target="_blank"
    >
      <button className="fixed right-4 top-[55%] transform -translate-y-1/2 bg-red-600 text-white px-3 py-2 rounded-lg shadow-lg">
        <i title="Report Bug" className="fa-solid fa-bug text-xl"></i>
      </button>
    </Link>
  );
};

export default ReportButton;
