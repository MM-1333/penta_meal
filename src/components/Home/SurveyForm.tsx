import { Input } from "../UI/Input";
import { Label } from "../UI/Label";
import { Select } from "../UI/Select";

const SurveyForm = () => {
  return (
    <div className="mt-8 p-4 my-8 bg-[#2E2F40] rounded-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.log("sign in form submitted");
        }}
        className="mb-5"
      >
        <div className="mt-5">
          <Label htmlFor="email">Select Option</Label>
          <Select id="choose_item" />
        </div>
        <div className="mt-5">
          <Label htmlFor="comment">Comment</Label>
          <Input id="comment" placeholder="Enter Comment" type="text" />
        </div>
        <div className="mt-5 flex justify-end items-center">
          <button
            className="flex items-center justify-center px-4 text-black hover:text-white rounded-md h-10 font-medium shadow-input bg-[#05D397] transition-all ease-in-out duration-500 delay-75"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
