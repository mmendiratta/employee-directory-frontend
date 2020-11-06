import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }));

  

export default class FormDirectory extends React.Component {
   //  const classes = useStyles();
    render() {
        return (
            <form>
            <TextField id="standard-search" label="Search field" type="search" css/>
            </form>
        );
    }
}