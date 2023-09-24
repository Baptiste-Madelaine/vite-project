import day from './assets/day.svg';
import night from './assets/night.svg';
import cloudy from './assets/cloudy.svg';
import cloudy_day_1 from './assets/cloudy_day_1.svg';
import cloudy_day_2 from './assets/cloudy_day_2.svg';
import cloudy_day_3 from './assets/cloudy_day_3.svg';
import cloudy_night_1 from './assets/cloudy_night_1.svg';
import cloudy_night_2 from './assets/cloudy_night_2.svg';
import cloudy_night_3 from './assets/cloudy_night_3.svg';
import rainy_1 from './assets/rainy_1.svg';
import rainy_2 from './assets/rainy_2.svg';
import rainy_3 from './assets/rainy_3.svg';
import rainy_4 from './assets/rainy_4.svg';
import rainy_5 from './assets/rainy_5.svg';
import rainy_6 from './assets/rainy_6.svg';
import rainy_7 from './assets/rainy_7.svg';
import snowy_1 from './assets/snowy_1.svg';
import snowy_2 from './assets/snowy_2.svg';
import snowy_3 from './assets/snowy_3.svg';
import snowy_4 from './assets/snowy_4.svg';
import snowy_5 from './assets/snowy_5.svg';
import snowy_6 from './assets/snowy_6.svg';
import thunder from './assets/thunder.svg';

import mapping from './json/mapping.json';

export default function svgs(props){
  console.log(mapping.weather.find(el => el.numéro === props.num).svg);
  return(
    <img src={"/src/assets/rainy_1.svg"} />
  );
}