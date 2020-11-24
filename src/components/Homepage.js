import React, { Fragment } from 'react';
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