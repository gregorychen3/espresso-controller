import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import Title from "./Title";

function createData(
  id: number,
  date: string,
  action: string,
  payload: string,
  user: string,
  status: string
) {
  return { id, date, action, payload, user, status };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Set Target Temp",
    "{temperature: 90}",
    "Gregory Chen",
    "Succeeded"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Set Target Temp",
    "{temperature: 91}",
    "Gregory Chen",
    "Succeeded"
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Set Target Temp",
    "{temperature: 92}",
    "Gregory Chen",
    "Succeeded"
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Set Target Temp",
    "{temperature: 93}",
    "Gregory Chen",
    "Succeeded"
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Set Target Temp",
    "{temperature: 94}",
    "Gregory Chen",
    "Succeeded"
  ),
];

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Recent Actions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Payload</TableCell>
            <TableCell>User</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.action}</TableCell>
              <TableCell>{row.payload}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more actions
        </Link>
      </div>
    </React.Fragment>
  );
};
