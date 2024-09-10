import { FC } from "react";

const SurveyResult: FC = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="w-full mt-8 p-4 my-8 bg-[#2E2F40] rounded-md">
        <div>
          <h2 className="text-2xl">Survey Result</h2>
        </div>

        <div className="w-full text-lg mt-4 bg-[#272838] px-4 py-8 rounded-lg">
          <table className="min-w-[780px] w-full overflow-x-auto">
            <thead className="bg-[#2E2F40]">
              <tr>
                <th className="py-4 px-2 text-left uppercase text-base">sl</th>
                <th className="py-4 px-2 text-left uppercase text-base">
                  name
                </th>
                <th className="py-4 px-2 text-right uppercase text-base">
                  yes
                </th>
                <th className="py-4 px-2 text-right uppercase text-base">no</th>
                <th className="py-4 px-2 text-right uppercase text-base">
                  no comment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-2  text-left text-base">1</td>
                <td className="py-4 px-2 text-left text-base">
                  cox bazar tour
                </td>
                <td className="py-4 px-2  text-right text-base">4</td>
                <td className="py-4 px-2  text-right text-base">6</td>
                <td className="py-4 px-2  text-right text-base">10</td>
              </tr>
              <tr>
                <td className="py-4 px-2  text-left text-base">1</td>
                <td className="py-4 px-2 text-left text-base">
                  cox bazar tour
                </td>
                <td className="py-4 px-2  text-right text-base">4</td>
                <td className="py-4 px-2  text-right text-base">6</td>
                <td className="py-4 px-2  text-right text-base">10</td>
              </tr>
              <tr>
                <td className="py-4 px-2  text-left text-base">1</td>
                <td className="py-4 px-2 text-left text-base">
                  cox bazar tour
                </td>
                <td className="py-4 px-2  text-right text-base">4</td>
                <td className="py-4 px-2  text-right text-base">6</td>
                <td className="py-4 px-2  text-right text-base">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SurveyResult;
