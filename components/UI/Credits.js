import PersonCardSmall from "./PersonCardSmall";

function Credits({ director, producer, topThreeCast }) {
  const showCrewCard = director || producer;
  const mainCrewTitle = director ? "Director: " : producer ? "Producer: " : "";
  const mainCrewName = director ? director.name : producer ? producer.name : "";
  const mainCrewProfilePath = director
    ? director.profile_path
    : producer
    ? producer.profile_path
    : "";

  const castCards = topThreeCast.map((castMember) => {
    return (
      <PersonCardSmall
        key={castMember.id}
        relativePath={castMember.profile_path}
        name={castMember.name}
        character={castMember.character}
      />
    );
  });

  return (
    <div className="mb-4 flex">
      {showCrewCard && (
        <div className="mr-1 sm:mr-8">
          <p className="text-black">{mainCrewTitle}</p>
          <PersonCardSmall
            relativePath={mainCrewProfilePath}
            name={mainCrewName}
          />
        </div>
      )}

      <div>
        <p>Cast: </p>
        <div className="flex gap-1 sm:gap-6 justify-center w-full">{castCards}</div>
      </div>
    </div>
  );
}

export default Credits;
