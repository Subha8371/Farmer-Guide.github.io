import hotBg from './assets/hot.jpg';
import coldBg from "./assets/cold.jpg";
import Descriptions from "./components/Descriptions";
// import Navbar from "./components2/Navbar";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";    //here import the api
import Navbar from './components2/Navbar';

function App2() {

  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");       //imperial for farenheight
  const [bg, setBg] = useState(hotBg);
  const [tip, setTip] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);    //here units refer temperature unit
      setWeather(data);              //update data..data is in object form..data means full weather details of one place 

      if (value === "1") {
        //tips logic
        if (data.temp <= 10) {
          if (data.humidity < 40) {
            setTip("Plant potatoes in well-drained soil that has plenty of organic matter.Use a low-nitrogen fertilizer to promote tuber development.Water regularly,but avoid overwatering as potatoes are susceptible to rot in damp conditions.");
          } else {
            setTip("Dont need to give water but avoid overwatering as potatoes are susceptible to rot in damp conditions. Plant potatoes in well-drained soil that has plenty of organic matter.Use a low-nitrogen fertilizer to promote tuber development.")
          }

        }

        else if (data.temp > 10 && data.temp <= 20) {
          if (data.humidity < 40) {
            setTip("Plant potatoes in well-drained soil that has plenty of organic matter.Use a low-nitrogen fertilizer to promote tuber development.Water regularly,but avoid overwatering as potatoes are susceptible to rot in damp conditions.");

          } else if (data.humidity > 40 && data.humidity <= 60) {
            setTip("Plant potatoes in loose,loamy soil with good drainage. Use a balanced fertilizer to promote healthy growth.Water regularly,keeping the soil evenly moist but not waterlogged");

          } else if (data.humidity > 60) {
            setTip("Ensuring that soil is kept moist but not waterlogged as potatoes are susceptible to rot in damp conditions. Plant potatoes in well-drained soil that has plenty of organic matter.Use a low-nitrogen fertilizer to promote tuber development.");

          }

        }

        else if (data.temp > 20 && data.temp <= 30) {
          if (data.humidity < 60) {
            setTip(" potatoes in well-drained,loose,loamy soil that has plenty of organic matter.Use a low-nitrogen fertilizer to promote tuber development.Water regularly,but avoid overwatering as potatoes are susceptible to rot in damp conditions.");

          }
          else if (data.humidity >= 60 && data.humidity <= 80) {
            setTip("Plant potatoes in a cool, shaded area to avoid excessive heat stress. Use a fertilizer with a higher phosphorus content to promote tuber growth.water regularly, ensuring that the soil is kept moist but not waterlogged");

          }
          else {
            setTip("Plant potatoes in a well-ventilated area to reduce humidity levels.Use a low-nitrogen fertilizer and water sparingly to avoid excessive moisture.");

          }


        }

        else if (data.temp > 30) {
          if (data.humidity < 80) {
            setTip("plant potatoes in a cool, shaded area to avoid excessive heat stress. Use a fertilizer with a higher phosphorus content to promote tuber growth.water regularly, ensuring that the soil is kept moist but not waterlogged");

          }
          else {
            setTip("Plant potatoes in a well-ventilated area to reduce humidity levels.Use a low-nitrogen fertilizer and water sparingly to avoid excessive moisture.Consider using a shde cloth or other protective cover to shield plants from direct sunlight.");

          }

        }

      }else{

        if (data.temp <= 15) {
          if (data.humidity < 40) {
            setTip("1)Low temperature combined with low humidity can result in slow growth and delayed maturity of rice   2)Consider using cold-tolerant rice varieties specifically adapted to low-temperature conditions. 3)Implement irrigation practices to maintain optimal soil moisture levels for the crop.Use mulching or floating row covers to trap heat and create a microclimate for the rice plants.4) If possible, consider using greenhouse or controlled-environment systems for early-season cultivation.");
          } else {
            setTip("1)Treat rice seeds with fungicides or biocontrol agents to protect them from seed-borne diseases that may thrive in cool and humid conditions. This can help improve seedling vigor and overall plant health. 2) Adjust fertilizer application rates based on the lower temperatures and slower growth rates. Conduct soil tests to determine nutrient deficiencies or excesses and make appropriate adjustments. Adequate nutrition is crucial for healthy plant growth and development")
          }

        }

        else if (data.temp > 15 && data.temp <= 35) {
          if (data.humidity < 40) {
            setTip(" 1)Monitor the crop regularly for signs of diseases and pests. Implement integrated pest management (IPM) practices to control pests effectively while minimizing chemical inputs. Follow recommended disease management strategies such as crop rotation, resistant varieties, and timely fungicide applications if necessary.2)mplement effective weed control measures to minimize competition with the rice crop. Use a combination of cultural, mechanical, and chemical weed control methods as appropriate for your farming system.");

          } else if (data.humidity > 40 && data.humidity <= 60) {
            setTip(" 1)Implement a balanced fertilizer program based on soil tests and crop nutrient requirements. Apply fertilizers at the right time and in the right proportions to ensure optimal plant nutrition. Monitor nutrient levels regularly and make adjustments as necessary. 2)Maintain proper irrigation practices to ensure adequate soil moisture throughout the growing season. Avoid over-irrigation, which can lead to waterlogging and nutrient leaching. ");

          } else if (data.humidity > 60) {
            setTip(" 1)Low temperature with high humidity can create a conducive environment for fungal diseases.2) Choose disease-resistant rice varieties that are adapted to such conditions.3)    Ensure proper drainage to prevent waterlogging and reduce excess humidity in the field.4)  Promote good airflow by maintaining appropriate spacing between plants.5)  Monitor the crop regularly for signs of diseases and apply appropriate fungicides if necessary");
          }

        }

        else if (data.temp > 35 && data.temp <= 50) {
          if (data.humidity < 60) {
            setTip(" 1)High temperature with low humidity can result in increased evaporation and water stress for the rice plants. 2) Increase irrigation frequency and monitor soil moisture levels closely to prevent drought stress.3) Consider implementing techniques like alternate wetting and drying (AWD) to optimize water usage.4)   Apply mulching to conserve soil moisture and reduce evaporation.5)   Provide shading or use nets to reduce direct sunlight exposure during the hottest parts of the day.");

          }
          else if (data.humidity >= 60 && data.humidity <= 80) {
            setTip("1)High temperature coupled with high humidity can lead to increased disease and pest pressure.2) Select disease-resistant rice varieties suitable for your region.3)  Implement proper drainage and water management practices to avoid waterlogging and reduce humidity levels.4) Provide adequate ventilation and airflow in the field to minimize humidity buildup.5)    Regularly monitor the crop for signs of diseases and pests and take appropriate preventive or control measures.");

          }
          else {
            setTip("1)High temperature coupled with high humidity can lead to increased disease and pest pressure.2) Select disease-resistant rice varieties suitable for your region.3)  Implement proper drainage and water management practices to avoid waterlogging and reduce humidity levels.4) Provide adequate ventilation and airflow in the field to minimize humidity buildup.5)    Regularly monitor the crop for signs of diseases and pests and take appropriate preventive or control measures.");

          }


        }
      }



      //dynamic bg
      const threshold = units === 'metric' ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    }

    fetchWeatherData();
  }, [units, city]);

  // select crop
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const getInitialState = () => {
    const value = "1";
    return value;
  };
  const [value, setValue] = useState(getInitialState);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText;

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");     //here metric means deggre and imperial means farenheight
    console.log(button.innerText);
  };


  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }



  return (

    <div className="App2" style={{
      backgroundImage: `url(${bg})
    ` }}>

       <Navbar />
      <div className="overlay">
        {
          weather && (
            <div className="container">

              {/* select */}
              <div className="selection">
                <select value={value} onChange={handleChange}>
                  <option value="1">Potato</option>
                  <option value="2">Rice</option>
                </select>
              </div>
              <div>

               

            </div>
              {/* weather */}
              <div className="section section__inputs">
                <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter city..." />  {/*use for input*/}
                <button onClick={(e) => handleUnitsClick(e)}><sup>o</sup>F</button>         {/*use for button*/}
              </div>



              <div className="section section__temperature">
                <div className="icon">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>   {/*weather.name-->cityname,,,weather.country-->countryname*/}
                  <img src={weather.iconURL}
                    alt="weatherIcon" />
                  <h3>{weather.description}</h3>   {/*wether.description is use for descriptio (like few clouds) */}
                </div>

                <div className="temperature">
                  {/*toFixed()--> remove decimal(ex: =>35.27-->35)*/}
                  <h1>{`${weather.temp.toFixed()}`}  {`${units === "metric" ? "°C" : "°F"
                    }`}
                  </h1>

                  {/* <h3>{`${weather.sunrise} / ${weather.sunset}`}</h3>
                   */}
                </div>
              </div>


              <div className="tip">
                <h1>{tip}</h1>
              </div>


              {/* bottom description */}
              <Descriptions weather={weather} units={units} />
            </div>
          )
        }

      </div>

    </div>
  );
}
export default App2;
