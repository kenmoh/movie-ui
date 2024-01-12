import React from "react";

const Overview = ({ overview }: { overview: string }) => {
  return (
    <div className="mt-5">
      <h3 className="mb-2 text-xl uppercase mt-10 font-bold">Overview</h3>
      <p>{overview}</p>
    </div>
  );
};

export default Overview;
