import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CustomIcon from "./CustomIcon";

function ListHeader({ text, isExpanded, onExpand, onContract, isExpandable }) {
  const currentIcon = isExpanded ? <FaChevronUp /> : <FaChevronDown />;

  const chevronClickHandler = () => {
    isExpanded ? onContract() : onExpand();
  };

  return (
    <div className=" flex items-center">
      <div
        className=" flex  mr-4 p-2 text-black hover:text-cyan-600"
        onClick={chevronClickHandler}
      >
        {isExpandable && (
          <CustomIcon
            icon={currentIcon}
            size="1.5rem"
            customClasses=" cursor-pointer hover:text-cyan-600 "
          />
        )}
      </div>

      <h1 className="text-2xl text-black tracking-normal">{text}</h1>
    </div>
  );
}

export default ListHeader;
