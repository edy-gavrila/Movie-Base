import PersonCardSmall from "./PersonCardSmall";

function Credits({ director, topThreeCast, topThreeRoles }) {
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
  console.log(topThreeCast);
  return (
    <div className="mb-4 flex">
      <div className="mr-8">
        <p className="text-black">Director:</p>
        <PersonCardSmall
          relativePath={director.profile_path}
          name={director.name}
        />
      </div>
      <div>
        <p>Cast: </p>
        <div className="flex gap-2 justify-center">{castCards}</div>
      </div>
    </div>
  );
}

export default Credits;
