import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";

const api =
  "http://employeedirectory-env.eba-jjpa4s2k.us-east-2.elasticbeanstalk.com/v1/";
const local = "http://localhost:5000/v1/";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const fetchData = async () => {
  const response = await fetch(local + "directory", { method: "GET" });
  const data = await response.json();
  console.log(data);
  return data;
};

export default function TableDirectory() {
  const [employees, setEmployees] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    const employeeData = async () => {
      setLoading(true);
      const people = await fetchData();
      setEmployees(people);
      setLoading(false);
    };
    employeeData();
    console.log(employees);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading &&
            employees.length > 0 &&
            employees.map((row) => (
              <TableRow key={row.firstName}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
