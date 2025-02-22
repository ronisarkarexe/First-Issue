import React from "react";
import httpCodes from "../../http_status_code.json";
import Link from "next/link";
import NavBar from "../nav_bar";

const HttpCodeViewComponent = () => {
  return (
    <div className="m-5">
      <Link href="/">
        <div className="mb-4">
          <NavBar />
        </div>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {httpCodes.map((httpCode) => {
          return (
            <div
              key={httpCode.code}
              className={`p-4 rounded-2xl shadow-lg bg-gray-600 text-black`}
            >
              <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl font-bold">{httpCode.code}</h1>
                <span className="text-sm">{httpCode.message}</span>
              </div>
              <span className="bg-gradient-to-r from-[#0F172A] via-pink-700 to-gray-900 text-transparent bg-clip-text font-bold">
                {httpCode.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HttpCodeViewComponent;
