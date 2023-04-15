import React, { useState } from "react";
import "./Orders.css";
import Pagination from "./Pagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { mockData } from "./MockData";

const Orders = () => {
  const [orders, setOrders] = useState(mockData);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  //   const handleFilterTextChange = (event) => {
  //     setFilterText(event.target.value);
  //     setCurrentPage(1);
  //   };

  const handleFilterTextChange = (event) => {
    const filterText = event.target.value;
    setFilterText(filterText);
    if (filterText === "") {
      setCurrentPage(1);
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.orderId.toString().includes(filterText) ||
      order.vendorName.toLowerCase().includes(filterText.toLowerCase()) ||
      order.pickupDate.includes(filterText) ||
      order.status.toLowerCase().includes(filterText.toLowerCase())
  );

  const pageCount = Math.ceil(filteredOrders.length / pageSize);
  const displayedOrders = filteredOrders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <TextField
        className="search"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        placeholder="Search orders by ID, vendor, date or status"
        value={filterText}
        onChange={handleFilterTextChange}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Order Id</TableCell>
              <TableCell align="center">Vendor name</TableCell>
              <TableCell align="center">Pick up date</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedOrders.map((order) => (
              <TableRow
                key={order.orderId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {order.orderId}
                </TableCell>
                <TableCell align="center">{order.vendorName}</TableCell>
                <TableCell align="center">{order.pickupDate}</TableCell>
                <TableCell align="center">{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Orders;
