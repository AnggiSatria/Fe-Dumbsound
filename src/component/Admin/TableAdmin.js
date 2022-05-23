import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function TableAdmin({ columns, transactions }) {
  const DataEndDate = (value) => {
    let d = new Date(value);
    let dnow = new Date();
    let bulan = d.getMonth();
    let hari = d.getDate();
    let tahun = d.getFullYear();
    return `${hari}-${bulan}-${tahun}`;
  };
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ "& .MuiTableCell-root": { bgcolor: "#2B2B2B" } }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ color: "red" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((value) => {
              return (
                <TableRow
                  key={value.id}
                  hover
                  role="checkbox"
                  className={`${
                    value.id % 2 === 0 ? "tableatas" : "tablebawah"
                  }`}
                  tabIndex={-1}
                >
                  <TableCell align="left" sx={{ color: "white" }}>
                    {value.id}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "white" }}>
                    {value.buyer.fullname}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "white" }}>
                    {DataEndDate(value.endDate)}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "white" }}>
                    {value.status}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "white" }}>
                    {value.status}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
