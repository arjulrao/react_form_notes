import React from 'react'
import NormalForm from './components/NormalForm';
import UsingUseRef from './components/UsingUseRef'
import ControlledComponents from './components/ControlledComponents';
import { ReactHookForm } from './components/ReactHookForm';

const App = () => {

  return (
    <div className='flex gap-10 p-10'>
      <NormalForm />
      <UsingUseRef />
      <ControlledComponents />
      <ReactHookForm />
    </div>
  )
}

export default App;
