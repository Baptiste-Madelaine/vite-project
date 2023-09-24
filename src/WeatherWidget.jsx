
import mapping from './json/mapping.json';
import Svgs from './svgs';

function WeatherWidget(props){
    if(props.data){
        return (
            <div className="parent"> 
                <div className="div1">{props.data.city}</div> 
                <div className="div2">
                    <img src={"/src/assets/"+mapping.find(el=> el.numéro == props.data.weather.weather).gradient + ".svg"}></img>
                </div> 
                <div className="div3">T°max : {props.data.weather.tmax} </div> 
                <div className="div4">T°min : {props.data.weather.tmin}</div> 
                <div className="div5"> </div> 
                <div className="div6"> </div> 
                <div className="div7"> </div> 
                <div className="div8"> </div> 
            </div>
        )
    }

    
};
export default WeatherWidget;