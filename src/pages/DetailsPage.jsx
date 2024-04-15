import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsPage() {
  const { id } = useParams();

  const [task, setTask] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI(id) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/" + id
        );

        setTask(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDataFromAPI(id);
  }, id);

  return (
    <div>
      <h1>Details {id}</h1>
      {task && <h2>{task.title}</h2>}
      <Link to="/">Retour à la page Master</Link>
    </div>
  );
}
