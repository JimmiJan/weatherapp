// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
  import React, { useEffect, useState } from 'react'
  import "./App.css"

  import Img from "./images/moon.png"
  const App = () => {

    const [weatherdata,setweatherdata] = useState({})
    const [city,setcity] = useState("")
    const [search,setsearch] =useState("karachi")


    useEffect(()=>{
     fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d3c4cd8f61fff7213fe085c61c8268cb&units=metric`
     )
     .then((res)=> res.json())
     .then((result)=>{
        // console.log(result)
        setweatherdata(result)
      })
      .catch((err)=>{
        console.log(err)
      })
    }, [city])

    const citis= (e)=>{
      
      setsearch(city)
      console.log(e)
    }

    return (
      <div className='mainbox'>
          <div className='d-flex alien-item-right justify-content-left my-3'

          style={{flexDirection :'column'  , alignItems: "center" ,}}>

            <input type="text" value={city} placeholder='Enter Your City' 

            onChange={(e)=>setcity(e.target.value)} 

            className='sss form-control  w-5 ' />

            <button onClick={citis} className='btn btn-primary my-2'>

                  City Name
            </button>
          </div>

        <div className='whather'>


            <div className='imgs'>
              <img src={Img} width={200} alt="" />

            </div>  
            <div className='wahterupdate'>
              <ul>
                <li>Today </li>
                <li>City Name {weatherdata && weatherdata.name }</li>
                <li>Temprature {weatherdata && weatherdata.main && weatherdata.main.temp}</li>

                <li>Weather {weatherdata && weatherdata.weather &&
               weatherdata.weather[0] &&
               weatherdata.weather[0].main} </li>
              </ul>

            </div>


        </div>



      </div>
    )
  }
  
  export default App
  