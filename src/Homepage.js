import React, { Fragment } from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';

export default function Homepage() {

  return (
    <Fragment>
      <form>
      <TextField id="standard-search" label="Search field" type="search" />
      </form>
    </Fragment>
  );

}