import { useState, useEffect } from "react";
import { totalSurveyHandler } from "../api/apiHandlers";

const useTotalSurvey = (): any => {
  const [totalSurvey, setTotalSurvey] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setTotalSurvey({
        isLoading: true,
        data: null,
        error: null,
      });

      const res = await totalSurveyHandler();

      console.log("res ::::::2333", res);

      setTotalSurvey({
        isLoading: false,
        data: res.data,
        error: res.error,
      });
    };

    fetchData();
  }, []);

  console.log("totalSurvey :10101", totalSurvey);

  return totalSurvey;
};

export default useTotalSurvey;
