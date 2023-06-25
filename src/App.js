
import './App.css';
import Header from './components/Header';
import Qn1 from './components/Qn1' ;
import Event from './components/Event';
import UseStateHook from './components/UseStateHook';
import Props from './components/Props';
import ConditionalRendering from './components/ConditionalRendering';
import Keys from './components/Keys';
import UseEffect from './components/UseEffect';
import FetchApi from './components/FetchApi';




function App() {

  const props1 = [
             
           {name1 : "mufees", domain :"python", qualification :"bca" },   
           {name1 : "yassun", domain :"python", qualification :"bba" },   
           {name1 : "naisam", domain :"python", qualification :"bca" },   
           {name1 : "varmasir", domain :"python", qualification :"diploma" },   
           {name1 : "thousif", domain :"python", qualification :"+2" },   

];





  return (
    <div className="App">

          <Qn1 />
          <Header />
          <Event />
          <UseStateHook />
          <Props propsmapping={props1} />
          <ConditionalRendering />
          <Keys />
          <FetchApi />
          <UseEffect />
     
    </div>
  );
}

export default App;
