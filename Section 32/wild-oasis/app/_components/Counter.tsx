"use client";

import { useState } from "react";
import { User } from "../types/myTypes";

export default function Counter({ user }: { user: User[] }) {
  const [count, setCount] = useState(0);
  console.log(user);

  return (
    <div>
      <p>There are {user.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}
