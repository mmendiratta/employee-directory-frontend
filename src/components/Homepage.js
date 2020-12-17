import React, { Fragment } from 'react';
import TableDirectory from './Table';
import FormDirectory from './NewEmployeeForm';

export default function Homepage() {

  return (
    <Fragment>
     <FormDirectory></FormDirectory>
      <TableDirectory></TableDirectory>
    </Fragment>
  );

}