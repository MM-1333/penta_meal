import { ItemType } from "./ReactEchartComponent";

export const options = (data: ItemType[]) => {
  return {
    tooltip: {
      trigger: "item",
      position: ["0%", "2%"],
      formatter: (params: any) => {
        return `<h4 style="color: rgb(0,0,0); white-space: normal;"Total: ${params?.data?.centerSerial} `;
      },
      textStyle: {
        ellipsis: "...",
      },
    },

    color: ["#ff00cc", "#7f7fd5", "#34e89e"],

    series: [
      {
        name: "Center Details",
        type: "pie",
        radius: ["25%", "50%"],
        labelLine: {
          length: 20,
        },
        label: {
          show: true,
          formatter: (params: any) => {
            return `${params?.data?.value || 0} %`;
          },
          color: "rgb(0,0,0)",
          backgroundColor: "#F6F8FC",
          borderColor: "#8C8D8E",
          borderWidth: 1,
          padding: 5,
          borderRadius: 4,
        },
        data: data || [],
      },
    ],
  };
};
