import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => (
  <MutatingDots
    height="100"
    width="100"
    color=" rgba(102, 1, 255, 0.763)"
    secondaryColor="rgba(102, 1, 255, 0.763)"
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40',
    }}
    wrapperClass=""
    visible={true}
  />
);
