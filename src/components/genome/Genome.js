import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

export const Genome = () => {

  let match = useRouteMatch();

  return (
    <div>
      {match.path}
      <Link to="/">Home</Link>
    </div>
  );
};
