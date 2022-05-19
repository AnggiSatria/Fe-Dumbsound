import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function TableAdmin({
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  columns,
}) {
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
            <TableRow
              hover
              role="checkbox"
              sx={{ "& .MuiTableCell-root": { bgcolor: "#3A3A3A" } }}
              tabIndex={-1}
            >
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
            </TableRow>
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              sx={{ "& .MuiTableCell-root": { bgcolor: "#2B2B2B" } }}
            >
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                loremIpsum
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          "& .MuiToolbar-root": { bgcolor: "#2B2B2B", color: "white" },
          "& .MuiSelect-icon": { color: "white" },
        }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={10}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
