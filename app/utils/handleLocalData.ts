import squadData1 from "@/app/local-data/squad-data-1.json";
import squadData2 from "@/app/local-data/squad-data-2.json";
import squadData3 from "@/app/local-data/squad-data-3.json";
import squadData4 from "@/app/local-data/squad-data-4.json";

export const squadData = [
  ...squadData1.response,
  ...squadData2.response,
  ...squadData3.response,
  ...squadData4.response,
];
