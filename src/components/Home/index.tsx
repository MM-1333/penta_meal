import { Input } from "../UI/Input";
import { Label } from "../UI/Label";
import { Select } from "../UI/Select";
import SurveyForm from "./SurveyForm";
import SurveyResult from "./SurveyResult";

const Home = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#272838] text-white bg-dot-black/[1] relative overflow-y-auto">
      <div className="max-w-[1200px] w-full h-full mx-auto text-white">
        <div className="px-4 py-8 mb-12 bg-[#2E2F40] rounded-md">
          <h2 className="text-3xl">Join To Our Survey.</h2>
        </div>

        <SurveyForm />

        <SurveyResult />
      </div>
    </div>
  );
};

export default Home;
