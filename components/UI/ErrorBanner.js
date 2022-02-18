import React from "react";

function ErrorBanner({ code, message }) {
  return (
    <div className="border-3 border-orange-400  rounded bg-orange-200 text-orange-800 absolute top-4 left-0 right-0 p-2 text-center">
      <h3>Error!</h3>
      <p>{message}</p>
      {code && <p>{code}</p>}
    </div>
  );
}

export default ErrorBanner;
