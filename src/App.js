import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import React from 'react'
import { Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import { useSelector } from 'react-redux';

function App () {
  const username = 'Automatic login';
  const password = '12345';
  const [access, setAccess] = React.useState(false);
  const [characters, setCharacters] = React.useState([]); //
  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
 function onClose(id) {
  setCharacters(
    characters.filter((character)=>character.id!==id)
  )
 }

 function login(userData) {
  if (userData.username===username && userData.password === password) {
    setAccess(true);
    window.location.replace('/home');
  }
 }

//  React.useEffect(() => {
//   window.location.pathname!=='/' && !access && window.location.replace('/');
// }, [access]);

function logOut() {
  setAccess(false);
  window.location.replace('/');
}
const myFavorites = useSelector((state)=>state.myFavorites);

  return (
    <>
      <div className='App' style={{ padding: '25px' }}>
        {useLocation().pathname!=='/' && <Nav onSearch={onSearch} logOut={logOut} />}
        
        <Route exact path="/home" render={(obj) => 
          <div class='cards'>
            <Cards
              characters={characters}
              onClose={onClose}
            />
          </div>
        }/>
        <Route exact path="/favorites" render={(obj) => 
          <div class='cards'>
            <Cards
              characters={myFavorites}
            />
          </div>
        }/>
        <Route path="/about" component={About} /> 

        <Route path="/detail/:detailId" render={(obj) =><Detail />}/>
        {/* <NotFoundRoute handler={Error} /> */}

        <Route exact path='/' render={(obj) => <Form login={login} />} />
    </div>
    </>
  )
    
}

export default App
