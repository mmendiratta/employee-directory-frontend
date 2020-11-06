import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import TableDirectory from './Table';
import FormDirectory from './Form';

export default function Homepage() {

  return (
    <Fragment>
     <FormDirectory></FormDirectory>
      <TableDirectory></TableDirectory>
    </Fragment>
  );

}