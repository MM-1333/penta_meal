import { ChangeEvent, FC, useState } from "react";
import { Label } from "../UI/Label";
import { Select } from "../UI/Select";
import { TextArea } from "../UI/TextArea";
import { surveySubmitHandler } from "../../api/apiHandlers";

type Props = {
  totalSurvey: any;
};

const SurveyForm: FC<Props> = ({ totalSurvey }): JSX.Element => {
  const [surveyInputState, setSurveyInputState] = useState({
    response: "",
    description: "",
  });

  const [surveyState, setSurveyState] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  const submitHandler = async () => {
    const res = await surveySubmitHandler({
      id: totalSurvey.data.results[0]?.id,
      ...surveyInputState,
    });

    setSurveyState({
      isLoading: false,
      data: res.data,
      error: res.error,
    });
  };

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setSurveyInputState((prev: { response: string; description: string }) => {
      return {
        ...prev,
        [e.target?.name]: e.target?.value,
      };
    });
  };

  console.log("surveyInputState surveyInputState :", surveyInputState);

  return (
    <div className="mt-8 p-4 my-8 bg-[#2E2F40] rounded-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
        className="mb-5"
      >
        <div className="mt-5">
          <Label htmlFor="response">Select Option</Label>
          <Select
            id="response"
            name="response"
            value={surveyInputState.response}
            required={true}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="mt-5">
          <Label htmlFor="description">Comment</Label>
          <TextArea
            id="description"
            placeholder="Enter Comment"
            required={true}
            name="description"
            value={surveyInputState.description}
            onChange={(e) => changeHandler(e)}
          />
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
