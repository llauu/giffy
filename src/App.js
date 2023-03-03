import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  const [searchValue, setSearchValue] = useState('random');

  // useEffect, lo que hace es ejecutarse cada vez que se renderiza el componente, osea cada vez que se actualiza nuestro componente se ejecuta useEffect
  // useEffect(function () {
  //   setGifs(another)
  //   getGifs({keyword: searchValue}).then(gif => setGifs(gif))
  // }, [])
  // el primer paramentro de useEffect recibe la funcion que queremos ejecturar, y el segundo recibe las dependencias que tiene este efecto,
  // es decir, las variables o informacion que tiene que cambiar para que se ejecute este efecto (este param tiene q ser un array)
  // si ponemos un array vacio (es decir q no tiene dependencias), significa que solo se va a ejecutar una sola vez: la primera vez q se renderiza el componente

  const search = (e) => {
    if (e.target.value.length >= 3) {
      setSearchValue(e.target.value);
    } else {
      if (e.target.value === '') {
        setSearchValue('random');
      }
    }
  };

  return (
    <div className='App'>
      <nav className='nav-bar'>
        <input
          className='search-bar'
          placeholder='Search for any lost gif on the internet'
          type='search'
          // onChange={(e) => setSearchValue(e.target.value)}
          onChange={(e) => search(e)}
        />
      </nav>
      <section className='App-content'>
        <div className='gif-container'>
          <ListOfGifs keyword={searchValue} />
        </div>
      </section>
    </div>
  );
}

export default App;
