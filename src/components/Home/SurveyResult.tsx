import { FC } from "react";
import { ReactEChartsComponent } from "../Chart/ReactEchartComponent";

type Props = {
  data: { [key: string]: any }[];
};

const SurveyResult: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className="w-full">
      <div className="w-full mt-8 p-4 my-8 bg-[#2E2F40] rounded-md">
        <div>
          <h2 className="text-2xl">Survey Result</h2>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-start text-lg mt-4 bg-[#272838] px-4 py-8 rounded-lg">
          <div className="w-full md:w-[50%]">
            <div className="w-full overflow-x-auto">
              <table className="min-w-[600px] w-full">
                <thead className="bg-[#2E2F40]">
                  <tr>
                    <th className="py-4 px-2 text-left uppercase text-base">
                      sl
                    </th>
                    <th className="py-4 px-2 text-left uppercase text-base">
                      name
                    </th>
                    <th className="py-4 px-2 text-right uppercase text-base">
                      yes
                    </th>
                    <th className="py-4 px-2 text-right uppercase text-base">
                      no
                    </th>
                    <th className="py-4 px-2 text-right uppercase text-base">
                      no comment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="py-4 px-2  text-left text-base">
                          {index + 1}
                        </td>
                        <td className="py-4 px-2 text-left text-base">
                          {item?.title || ""}
                        </td>
                        <td className="py-4 px-2  text-right text-base">
                          {item?.yes_count | 0}
                        </td>
                        <td className="py-4 px-2  text-right text-base">
                          {item?.no_count || 0}
                        </td>
                        <td className="py-4 px-2  text-right text-base">
                          {item?.neutral_count || 0}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full h-full md:w-[50%] p-4 mt-4 md:mt-0">
            <ReactEChartsComponent
              data={[
                { id: 1, name: "yes", value: 8 },
                { id: 2, name: "no", value: 20 },
                { id: 3, name: "no comment", value: 4 },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyResult;
