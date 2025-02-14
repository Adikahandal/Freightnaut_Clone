import Body from './components/Body';
import FFS from './components/FFS';
import Freightnaut_soft from './components/Freightnaut_soft';
import Header from './components/Header';

function App() {

  console.log(window.innerHeight);


  return (
    <>
      <Header></Header>
      <Body></Body>
      <FFS></FFS>
      <Freightnaut_soft></Freightnaut_soft>
    </>
  );
}

export default App;
