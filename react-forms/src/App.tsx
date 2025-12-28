import "./App.css";
import MyForm from "./components/MyForm";
import type { User } from "./components/User";

function App() {
  const user: User = {
    name: "Cristain",
    email: "dutkercz@gmail.com",
    bio: "Minha biografia de usuario",
    role: "admin",
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Forms</h2>
      <MyForm userProps={user} />
    </>
  );
}

export default App;
