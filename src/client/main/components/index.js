import React, { Suspense, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Wrapper from './Wrapper/Wrapper'

function App() {

  return (
    <div>
      <Wrapper />
    </div>
  )
}

export default hot(App)
