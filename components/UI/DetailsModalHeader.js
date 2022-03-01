function DetailsModalHeader({
  title,
  releaseYear,
  genreList,
  runtime,
  numberOfseasons,
}) {
  const numberOfseasonsString = `${numberOfseasons} season${
    numberOfseasons === 1 ? "" : "s"
  }`;
  return (
    <div>
      <h2 className="text-black text-2xl  font-bold">
        {`${title} (${releaseYear})`}
      </h2>
      <ul className="list-disc flex flex-wrap overflow-hidden pl-4 mb-2 text-sm">
        <li className="mr-6">{genreList}</li>
        {runtime && <li className="">{`${runtime} mins`}</li>}
        {numberOfseasons && <li className="">{numberOfseasonsString}</li>}
      </ul>
    </div>
  );
}

export default DetailsModalHeader;
