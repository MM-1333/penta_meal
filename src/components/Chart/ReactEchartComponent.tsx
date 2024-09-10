import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { BarChart, LineChart, PieChart, GaugeChart } from "echarts/charts";

import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";
import { memo } from "react";
import { options } from "./options";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  PieChart,
  GaugeChart,
  SVGRenderer,
]);

const loadingOptions = () => {
  return {
    text: "",
    zlevel: 0,
    lineWidth: 5,
    color: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "#DECBA4",
        },
        {
          offset: 1,
          color: "#DECBA4",
        },
      ],
      global: false,
    },
    showSpinner: true,
    spinnerRadius: 20,
    maskColor: "rgba(255, 255, 255, 0.8",
  };
};

export type ItemType = { id: number | string; name: string; value: number };

interface ReactEChartsComponentPropsType {
  data: ItemType[];
}

export const ReactEChartsComponent = memo(
  ({ data }: ReactEChartsComponentPropsType) => {
    return (
      <>
        <ReactEChartsCore
          theme={""}
          option={options(data)}
          echarts={echarts}
          notMerge={false}
          lazyUpdate={true}
          showLoading={false}
          style={{
            height: "300px",
            width: "100%",
          }}
          loadingOption={loadingOptions()}
        />
      </>
    );
  }
);
