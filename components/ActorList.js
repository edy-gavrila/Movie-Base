import ActorCard from "./UI/ActorCard";

function ActorList({ actorData }) {
  const content = actorData.map((actor) => {
    const {id} = actor;
    return <ActorCard key={id} actorData={actor} />;
  });
  return (
    <div className=" flex flex-col  sm:flex-row flex-wrap gap-4">{content}</div>
  );
}

export default ActorList;
