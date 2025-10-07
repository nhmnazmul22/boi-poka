import React from "react";

const BookOtherInfo = ({ label, value }) => {
  return (
    <p className="flex gap-5 items-center">
      <span className="flex-1 max-w-[200px] text-gray-600">{label}</span>
      <span className="flex-1 font-medium">{value}</span>
    </p>
  );
};

export default BookOtherInfo;
