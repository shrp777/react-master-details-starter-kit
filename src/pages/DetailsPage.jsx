import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsPage() {
  //récupération dynamique de l'id renseigné dans l'URI
  const { id } = useParams();

  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchDataFromAPI(id) {
      try {
        //masque le message d'erreur
        setIsError(false);
        //affichage du message de chargement
        setIsLoading(true);

        //requête auprès de l'API
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/" + id
        );

        //affectation des données récupérées via l'API
        setTask(response.data);

        //masque le message d'erreur
        setIsError(false);
        //masque le message de chargement
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        //affichage du message d'erreur
        setIsError(true);
        //masque le message de chargement
        setIsLoading(false);
      }
    }

    fetchDataFromAPI(id);
  }, id);

  return (
    <div>
      <h1>Details {id}</h1>
      {isLoading && <p>Chargement en cours</p>}
      {isError && <p>Une erreur s'est produite</p>}
      {task && <h2>{task.title}</h2>}
      <Link to="/">Retour à la page Master</Link>
    </div>
  );
}
