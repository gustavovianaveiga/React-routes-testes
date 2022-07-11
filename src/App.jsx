import AppRouter from "./routes"
import { Link } from "react-router-dom"

function App() {


  return (
    <div>
      <h2>estatico</h2>
      <Link to="/contato">contato</Link>
      <br></br>
      <Link to="/pagina-inicial">pagina-inicial</Link>
      <br></br>
      <Link to="/shop">shop</Link>
      <AppRouter />
    </div>


  )
}

export default App
