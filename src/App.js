import { useState } from "react";
import MainComponent from "./components/MainComponent";
import DATA from './shared/data.json';


function App() {
  const [data, setData] = useState(DATA);
  const [active, setActive] = useState('daily');

const handleFilter = (filter) =>{
  setActive(filter);
}
  
  
  return (
    <div className="wrapper">
      <MainComponent data={ data } active={active} handleFilter = {handleFilter}/>
    </div>
  );
}

export default App;
