import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const api = 'http://employeedirectory-env.eba-jjpa4s2k.us-east-2.elasticbeanstalk.com/api/';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("Patrick Mahomeboy", 15, "QB", 24, "KC"),
  createData("James Robinson", 32, "RB", 37, "JAX"),
  createData("Zeke Elliot", 23, "RB", 24, "DAL"),
  createData("Justin Jefferson", 18, "WR", 67, "MN"),
  createData("Travis Kelce", 87, "TE", 49, "KC"),
];


export default class TableDirectory extends React.Component {
  // componentDidMount() {
  //   fetch(api + 'employees')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

  render() {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Number</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Team</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
