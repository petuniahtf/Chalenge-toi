
import './App.css';
import Page from './page/Page';
import Page1 from './page1/Page1';
import Page2 from './page2/Page2';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Page3 from './page3/page3';
import Page4 from './page4/page4';
import Page5 from './page5/page5';
import Page6 from './page6/page6';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/page1' element={<Page1/>}/>
      <Route path='/page2' element={<Page2/>}/>
      <Route path= '/page3' element={<Page3/>}/>
      <Route path='/page4' element={<Page4/>}/>
      <Route path='/page5' element={<Page5/>}/>
      <Route path='/page6' element={<Page6/>}/>
    </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
