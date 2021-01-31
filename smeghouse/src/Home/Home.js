import React from 'react';

export const Home = (props) => {
  console.log('home', props);
  return (
  <main>
    <h2>Home</h2>
    {props.products.map((product) => <div key={product.id}>{product.name}</div>)}
  </main>
)};
