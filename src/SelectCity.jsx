import {useState} from 'react'
function SelectCity({onFormSubmit, elements, disp}){
   
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        onFormSubmit({city : elements[inputValue].nom, insee : elements[inputValue].code});
        //console.log(elements[inputValue].nom);
    }
    const style = {
        display: disp ? 'block' : 'none'
    };

    return(
        <form onSubmit={handleSubmit} style={style}>
            <label htmlFor="city">Villes :
                <select onChange={(e) => setInputValue(e.target.value)}>
                    <option value="">---Selectionnez votre ville---</option>
                    {Array.from(elements).map((item,index)=>{
                        //console.log(item.nom);
                        return(<option key={index} value={index}>{item.nom}</option>);
                    })}
                </select>
            </label>
            <button type="submit">Lancer</button>
        </form>
    );
    /*
    {elements.map((item,index) => {
                        return (<option key={item.nom} value={item.nom}>{item.nom}</option>)
                    })}
    */ 
}
export default SelectCity;