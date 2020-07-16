import React, { Suspense, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import UploadExample from './uploadExample';
import Wrapper from './Wrapper/Wrapper'
import Aviaries from './Aviaries/Aviaries'

function App() {

  return (
    <div>
      {/* <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Let's start dev</h1>
            <UploadExample/> */}

      {/* <Wrapper /> */}
      <Aviaries />
    </div>
  )
}

export default hot(App)
