
import { useState } from 'react';
import mapping from '../json/mapping.json';

function WeatherWidget({data}){

    const [res, setRes] = useState('');
    const showResult = (data) =>{
        console.log(data)
        
    }
       fetch(`https://api.meteo-concept.com/api/forecast/daily?token=496395ad7d32077205c47de016df366d1bf8cef8deff6b26e6cb7a7508ee1183&insee=${data}`)
       .then(res => res.json())
       .then(result => showResult(result))
       .catch(e => showResult(result))
    //showResult();
    return(
        <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card" >
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1">{"Caen"}</h6>
                                    <h6>15:07</h6>
                                </div>
                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className="display-4 mb-0 font-weight-bold" > 13°C </h6>
                                <span className="small" >Stormy</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1" >
                                    <div>
                                        <i className="fas fa-wind fa-fw" ></i> 
                                        <span className="ms-1"> 40 km/h</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-tint fa-fw" ></i> 
                                        <span className="ms-1"> 84% </span>
                                    </div>
                                    <div>
                                        <i className="fas fa-sun fa-fw" ></i> 
                                        <span className="ms-1"> 0.2h </span>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templatesbootstrap-weather/ilu1.webp" width="100px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
//
export default WeatherWidget;