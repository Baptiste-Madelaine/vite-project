function api(cp = 14000) {
    const getCity = async() => {
      try {
        const response = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${cp}`);
        if (!response.ok) {
          throw new Error('La requête a échoué.');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        throw error;
      }
    };
  
    return { getCity };
  }
  
  export default api;
  