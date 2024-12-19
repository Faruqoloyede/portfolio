import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Spinner = ({ loading }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <BounceLoader
        color='#ff004f'
        loading={loading}
        cssOverride={override}
        size={100}
      />
    </div>
  );
};

export default Spinner;
