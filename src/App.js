import "./App.css"
import Card from "./Card.js"

const termos = ["Feliz", "Triste", "Sim", "Pudim", "Chocolate", "Teste"]
const App = () => {
  return (
    <div className="card-container">
      {
        termos.map(termo => {
          return <Card>{termo}</Card>  
        })
      }          
    </div>
  )
  
}

export default App