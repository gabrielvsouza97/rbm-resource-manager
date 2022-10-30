import * as Styled from "./example-atom-style";

import { useAuth } from "contexts/auth-context";
import { useState } from "react";

export default function ExampleAtom() {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const { login } = useAuth();

  function handleLogin() {
    if (form.login === "daniel" && form.password === "123") {
      login();
      return;
    }
    alert("incorret password");
  }

  return (
    <Styled.StyledDiv>
      <input placeholder="login" value={form.login} onChange={(e) => setForm((prev) => ({ ...prev, login: e.target.value }))} />
      <input placeholder="password" onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} />
      <button onClick={handleLogin}>Login</button>
    </Styled.StyledDiv>
  );
}
