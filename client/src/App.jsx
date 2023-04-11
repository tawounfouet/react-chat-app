import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Chat from '@/components/chat';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={<Chat />} />
          {/* <Route path='*' element={<Navigate to='/' />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;