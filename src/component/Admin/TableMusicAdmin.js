import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../assets/css/main.css";

export default function TableMusicAdmin({
  columns,
  music,
  EditMusic,
  DeleteMusic,
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
            {/* 2B2B2B */}
            {music?.map((value) => {
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
                    {value.title}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "white" }}>
                    <Button
                      onClick={() => EditMusic(value.id)}
                      component="span"
                      sx={{
                        borderColor: "black",
                        bgcolor: "blue",
                        paddingTop: 1,
                      }}
                      variant="outlined"
                    >
                      <Typography variant="body1" color="white">
                        Edit
                      </Typography>
                    </Button>
                    <Button
                      component="span"
                      onClick={() => DeleteMusic(value.id)}
                      sx={{
                        borderColor: "black",
                        bgcolor: "red",
                        paddingTop: 1,
                        ml: 2,
                      }}
                      variant="outlined"
                    >
                      <Typography variant="body1" color="white">
                        Delete
                      </Typography>
                    </Button>
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
