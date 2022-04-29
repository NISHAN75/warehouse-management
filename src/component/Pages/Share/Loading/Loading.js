import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="mt-5 mb-5 w-50 mx-auto text-center">
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default Loading;