import {useState} from 'react'
function SelectCity({data, res}){
/*
    const handleSelectSubmit = async (response) => {
        setReponseSelect(response);
        //console.log(response);
        await fetch(`https://api.meteo-concept.com/api/forecast/daily?token=496395ad7d32077205c47de016df366d1bf8cef8deff6b26e6cb7a7508ee1183&insee=${response.insee}`)
        .then(result => result.json())
        .then(result =>{
            console.log(result)
        });
    }
*/

    const handleSubmit = (e)=>{
        e.preventDefault();
        onFormSubmit();
        //console.log(elements[inputValue].nom);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="city">Villes : 
                <select onChange={(e) => res(e.target.value)}>
                    <option value="">---Selectionnez votre ville---</option>
                    {Array.from(data).map((item,index)=>{
                        //console.log(item.nom);
                        return(<option key={index} value={item.code}>{item.nom}</option>);
                    })}
                </select>
            </label>
        </form>
    );
    /*
    {elements.map((item,index) => {
                        return (<option key={item.nom} value={item.nom}>{item.nom}</option>)
                    })}
    */ 
}
export default SelectCity;