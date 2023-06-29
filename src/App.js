import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const countryArrays = [
  {
    country:"India",
    value:"In",
    cities:["Telangana","AndhraPradesh","Rajasthan","Maharashtra"]
  },
  {
    country:"Pakistan",
    value:"Pak",
    cities:["Pak-One","Pak-Two","Pak-Three"]
  }
]
// console.log(countryArrays[0].country);
const [city, setCity] = useState(countryArrays[0].cities);
const handle = (e)=>{
  // console.log(e.target.value);
  const f = countryArrays.filter((i)=> i.country==e.target.value)
  setCity(f[0].cities)
  console.log(city);
}

  return (
    <div className="App">
        <select name="" id="" onChange={handle}>
          {
            countryArrays.map((item, index)=>{
              
              // console.log(item);
              return(
                <>
                  <option value={item.country}>
                    {item.country}
                  </option>
                </>
              )
            })
          }
        </select>

        <select name="" id="">
          {
            city.map((item, index)=>{
              // console.log(item);
              return(
                <>
                  <option value={item}>
                    {item}
                  </option>
                </>
              )
            })
          }
        </select>
    </div>
  );
}

export default App;
