import Counter from "../components/Counter";
import { User } from "../types/myTypes";

export default async function CabinsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await res.json();

  // logs of the server components will appear on the terminal console and not in the browser.
  // If it is a client component only then the logs will appear in browser
  console.log(data); //  ← will appear in terminal not in browser

  return (
    <div>
      <h1>Cabins Page </h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter user={data} />
    </div>
  );
}
