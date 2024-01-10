import Image from "next/image";
import React from "react";

function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src="/spinner.gif" alt="spinner" width={56} height={56} />
    </div>
  );
}

export default loading;
