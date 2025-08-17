import { Link } from "react-router-dom"
import { jestMethods } from "./methods/methodsList"

export default function MethodList() {
  return (
    <div>
      <header className="main-header">
        <h1>Jest Methods Playground</h1>
      </header>
      <div className="App">
        <ul>
          {jestMethods.map(({ name, label, description }) => (
            <li key={name}>
              <Link to={`/method/${name}`}>
                <strong>{label}</strong> — {description}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
