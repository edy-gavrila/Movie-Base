import React from "react";

function ErrorBanner({ code, message }) {
  return (
    <div className="border-3 border-orange-400  rounded bg-orange-200 text-orange-800  p-2 mb-2 text-center  w-full">
      <h3>Error!</h3>
      <p>{message}</p>
      {code && <p>{code}</p>}
    </div>
  );
}

export default ErrorBanner;
