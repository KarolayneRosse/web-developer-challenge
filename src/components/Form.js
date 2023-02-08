import { useState } from "react"
import Button from "./Button"

function Form(params) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();

  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(`Usuário ${name} com senha ${password}, foi cadastrado com sucesso!`)
  }

  return (
    <div>
      <h1>Meu cadastro</h1>
      {//por mais estranho que pareça é um if
        age >= 18 && (
          <h5>Vc é maior de idade agora</h5>
        )
      }
      <form>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="age">Idade</label>
          <input type="number" id="age" onChange={(e) => setAge(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="text" id="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div>
          <Button event={cadastrarUsuario} text="Cadastrar"></Button>
        </div>
      </form>
    </div>
  )
}

export default Form;