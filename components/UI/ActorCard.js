import Image from "next/image";
import { makeFullImageUrl } from "../../APIs/tmdb";

function ActorCard({ actorData }) {
  const { name, profilePath, knownForTitles } = actorData;
  const imageWidth = "185";
  const imageHeight = "278";
  const fullProfileUrl = makeFullImageUrl(profilePath, imageWidth);

  const knownForContent = knownForTitles.map((title) => `${title.name}, `);

  const containerClasses =
    "bg-white rounded-md overflow-hidden flex sm:block sm:w-[185px] shadow-lg  text-black tracking-normal cursor-pointer";

  return (
    <div className={containerClasses}>
      <div>
        <Image
          src={fullProfileUrl}
          width={imageWidth}
          height={imageHeight}
          layout="fixed"
          alt="Actor image"
        />
      </div>

      <div className="p-2 grow">
        <h4 className="mb-2 sm:text-sm text-center sm:text-left font-bold overflow-hidden">
          {name}
        </h4>
        <p className="sm:text-xs  text-slate-500">{knownForContent}</p>
      </div>
    </div>
  );
}

export default ActorCard;
