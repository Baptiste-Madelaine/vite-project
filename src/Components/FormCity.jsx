import {useState} from 'react'
import SelectCity from './SelectCity'

function FormCity({res}){
    const [inputValue, setInputValue] = useState("");
    const reg = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;

    const onFormSubmit = (e) => {
        fetch(`https://geo.api.gouv.fr/communes?codePostal=${inputValue}`)
        .then(res => res.json())
        .then(result => {
            res(result);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(reg.test(inputValue)){
            onFormSubmit();
        }else{
            alert("Ce n'est pas un code postal :)");
        }
    }
    return(
    <>
        <h3>Choisissez votre ville: </h3>
        <form onSubmit={handleSubmit}>
            <label>Code Postal
            <input 
            type="text" 
            name="cp" 
            id="cp" 
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            />
            </label>
            <input type="submit" value="Chercher !" />
        </form>
    </>
    );
    
}
export default FormCity;