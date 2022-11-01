import * as Styled from "./example-atom-style";

import { useAuth } from "contexts/auth-context";
import { useState } from "react";

export default function ExampleAtom() {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const { login } = useAuth();

  async function handleLogin() {
    login(form.login, form.password);
  }

  return (
    <Styled.StyledDiv backgroundColor="#313131">
      <input placeholder="login" value={form.login} onChange={(e) => setForm((prev) => ({ ...prev, login: e.target.value }))} />
      <input placeholder="password" onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} />
      <button onClick={handleLogin}>Login</button>
    </Styled.StyledDiv>
  );
}
