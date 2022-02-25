import { IconContext } from "react-icons/lib";

function CustomIcon({ icon, customClasses, size }) {
  return (
    <div className="inline-block">
      <IconContext.Provider
        value={{ size: `${size}`, className: `${customClasses}` }}
      >
        {icon}
      </IconContext.Provider>
    </div>
  );
}

export default CustomIcon;
