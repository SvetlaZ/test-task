import React, { Suspense, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Wrapper from './Wrapper/Wrapper';
import UploadExample from './UploadExample'

function App() {

  return (
    <div>
      {/* <UploadExample /> */}
      <Wrapper />
    </div>
  )
}

export default hot(App)
