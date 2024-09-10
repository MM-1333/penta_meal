import { useState, useEffect } from "react";
import { surveyResultHandler } from "../api/apiHandlers";

const useSurveyResult = (): any => {
  const [surveyResultList, setSurveyResultList] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setSurveyResultList({
        isLoading: true,
        data: null,
        error: null,
      });

      const res = await surveyResultHandler();

      setSurveyResultList({
        isLoading: false,
        data: res.data,
        error: res.error,
      });
    };

    fetchData();
  }, []);

  return surveyResultList;
};

export default useSurveyResult;
