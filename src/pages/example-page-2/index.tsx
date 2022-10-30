import { useAuth } from "contexts/auth-context";

export default function ExamplePage2() {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
}
