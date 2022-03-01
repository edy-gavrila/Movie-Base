import React from "react";

function DetailsModalHeader({
  title,
  releaseYear,
  genreList,
  runtime,
  seasons,
}) {
  return (
    <div>
      <h2 className="text-black text-2xl  font-bold">
        {`${title} (${releaseYear})`}
      </h2>
      <ul className="list-disc flex flex-wrap overflow-hidden pl-4 mb-2 text-sm">
        <li className="mr-6">{genreList}</li>
        {runtime && <li className="">{`${runtime} mins`}</li>}
        {seasons && <li className="">{`${seasons} seasons`}</li>}
      </ul>
    </div>
  );
}

export default DetailsModalHeader;
