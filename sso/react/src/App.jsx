import { useState } from 'react';
import './App.css';
import Reducer from './hooks/reducer';
import UseStorage from './hooks/syncExternalStore';
import Transiton from './hooks/transition';
import DeferredValue from './hooks/deferredValue';
function Apps() {
  // //逻辑其实一样的只是区分了不用应用的AppId
  // const token = location.search.split('=')[1];
  // if (!token) {
  //   fetch('http://localhost:3000/login?appId=9LQ8Y3mB').then(res => {
  //     location.href = res.url;
  //   });
  // }
  // return (
  //   <>
  //     <h1>react19</h1>
  //   </>
  // );
  // return <Reducer />;
  // fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(json => console.log(json));
  // return <UseStorage />;
  // return <Transiton />;
  return <DeferredValue />;
}
export default Apps;
