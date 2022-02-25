import SiteLayout from "../components/SiteLayout";
import CustomIcon from "../components/UI/CustomIcon";
import { FaTools } from "react-icons/fa";

function ResetPassword() {
  return (
    <SiteLayout>
      <section className=" mt-[20rem] pl-20 flex">
        <CustomIcon
          icon={<FaTools />}
          size="3rem"
          customClasses="text-slate-500"
        />
        <div className="border-r-2 border-slate-500 ml-2 mr-1"></div>
        <div>
          <p className="text-sm">Dear User,</p>
          <p className="text-sm">
            Please bear with us as we are working hard to build this feature.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ResetPassword;
