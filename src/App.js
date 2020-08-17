import React from 'react';

import Header from './components/Header';
import PostItem from './components/PostItem';
import PostList from './components/PostList';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      {/* <PostItem/> */}
      <PostList/>
    </>  
  );
}

export default App;
