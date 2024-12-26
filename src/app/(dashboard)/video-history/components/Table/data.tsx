"use client";

import { Payment } from "./columns";

//--------------------get table data and save to local storage for global usage
// export async function getTableData() {
//   if (
//     typeof window !== "undefined" &&
//     typeof window.localStorage !== "undefined"
//   ) {
//     if (window.localStorage.getItem("userData")) {
//       return [];
//     }
//     try {
//       const token = window.localStorage.getItem("token");
//       const response = await fetch("/getUsers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token, dataNumber: 500 }), //sending token and number of data to get from endpoint
//       });
//       const result = (await response.json()) as any;

//       if (
//         (await response.status) === 201 &&
//         typeof window !== "undefined" &&
//         typeof window.localStorage !== "undefined"
//       ) {
//         // Save values to localStorage
//         window.localStorage.setItem("userData", JSON.stringify(result?.data));
//       }
//       return result;
//     } catch (error) {
//       console.error("Error:", error as any);
//     }
//   }
// }

export const data: Payment[] = [
  {
    id: "0",
    dateTime: "12.09.2019 - 12.53 PM",
    activityType: "Payout",
    amount: "$3,295",
    status: "Delivered",
    action: true,
  },
  {
    id: "1",
    dateTime: "12.09.2019 - 12.53 PM",
    activityType: "Affilate Link",
    amount: "$3,15",
    status: "Pending",
    action: true,
  },
  {
    id: "2",
    dateTime: "12.09.2019 - 12.53 PM",
    activityType: "Video Uploaded",
    amount: "",
    status: "Rejected",
    action: true,
  },
];
