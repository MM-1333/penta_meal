import useSurveyResult from "../../hooks/useSurveyResult";
import useTotalSurvey from "../../hooks/useTotalSurvey";
import SurveyForm from "./SurveyForm";
import SurveyResult from "./SurveyResult";

const Home = () => {
  const surveyResultList = useSurveyResult();
  const totalSurvey = useTotalSurvey();

  const { isLoading, data, error } = surveyResultList;

  return (
    <div className="w-full min-h-[100vh] bg-[#272838] text-white bg-dot-black/[1] relative overflow-y-auto">
      <div className="max-w-[1200px] w-full h-full mx-auto text-white">
        {isLoading && totalSurvey.isLoading && (
          <div className="w-full h-full flex items-center justify-center px-4 py-8 my-[80px] bg-[#2E2F40] rounded-md">
            <h2 className="text-xl text-center">Loading</h2>
          </div>
        )}

        {!isLoading && !totalSurvey.isLoading && error && (
          <div className="w-full h-full flex items-center justify-center px-4 py-8 my-[80px] bg-[#2E2F40] rounded-md">
            <h2 className="text-xl text-center">Somethings Wrong</h2>
          </div>
        )}

        {!isLoading && !totalSurvey.isLoading && !error ? (
          data?.results?.length >= 0 ? (
            <>
              <div className="px-4 py-8 mb-12 bg-[#2E2F40] rounded-md">
                <h2 className="text-xl capitalize">
                  {totalSurvey?.data?.results[0]?.title || ""}
                </h2>
              </div>
              <SurveyResult data={data?.results || []} />
            </>
          ) : (
            <>
              <div className="px-4 py-8 mb-12 bg-[#2E2F40] rounded-md">
                <h2 className="text-3xl capitalize">
                  {totalSurvey?.data?.results[0]?.title || ""}
                </h2>
              </div>

              <SurveyForm totalSurvey={totalSurvey} />
            </>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;
