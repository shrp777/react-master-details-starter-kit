import { Link } from "react-router-dom";

export default function MasterPage() {
  const tasks = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ];

  return (
    <div>
      <h1>Master</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={"/details/" + task.id}>Task {task.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
