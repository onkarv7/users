import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const mockData = [
//   {
//     orderId: 0,
//     vendorName: "Vendor A",
//     pickupDate: "2022-01-01",
//     status: "Shipped",
//   },
//   {
//     orderId: 1,
//     vendorName: "ACME Corp",
//     pickupDate: "2023-04-15",
//     status: "Pending",
//   },
//   {
//     orderId: 2,
//     vendorName: "XYZ Inc",
//     pickupDate: "2023-04-16",
//     status: "Shipped",
//   },
//   {
//     orderId: 3,
//     vendorName: "ABC Ltd",
//     pickupDate: "2023-04-17",
//     status: "Cancelled",
//   },
//   {
//     orderId: 4,
//     vendorName: "Foo Bar Inc",
//     pickupDate: "2023-04-18",
//     status: "Shipped",
//   },
//   {
//     orderId: 5,
//     vendorName: "Baz Corp",
//     pickupDate: "2023-04-19",
//     status: "Pending",
//   },
//   {
//     orderId: 6,
//     vendorName: "Qux Inc",
//     pickupDate: "2023-04-20",
//     status: "Cancelled",
//   },
//   {
//     orderId: 7,
//     vendorName: "Acme Corp",
//     pickupDate: "2023-04-21",
//     status: "Pending",
//   },
//   {
//     orderId: 8,
//     vendorName: "Xyz Inc",
//     pickupDate: "2023-04-22",
//     status: "Shipped",
//   },
//   {
//     orderId: 9,
//     vendorName: "Abc Ltd",
//     pickupDate: "2023-04-23",
//     status: "Cancelled",
//   },
//   {
//     orderId: 10,
//     vendorName: "Foo Bar Inc",
//     pickupDate: "2023-04-24",
//     status: "Shipped",
//   },
//   {
//     orderId: 11,
//     vendorName: "Baz Corp",
//     pickupDate: "2023-04-25",
//     status: "Pending",
//   },
//   {
//     orderId: 12,
//     vendorName: "Qux Inc",
//     pickupDate: "2023-04-26",
//     status: "Cancelled",
//   },
//   // ... add more mock data as needed
// ];
