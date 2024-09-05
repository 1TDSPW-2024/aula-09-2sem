import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

export default function Usuarios() {

  // MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "Usuarios";

  const [usuarios, setUsuarios] = useState([{
    login: "",
    avatar_url: ""
  }]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setUsuarios(data);  // Corrigido para setUsuarios
      })
      .catch(error => console.error("Erro ao buscar usuário: ", error));
  }, []);

  // Realizando uma requisição para uma API-REST(api do github) com fetch 
  return (
    <div>
      <h1>Bem Vindo!</h1>

      {usuarios.map((usuario, index) => (
        <div key={usuario.login || index}>
          <h2>{usuario.login}</h2>
          <figure>
            <img src={usuario.avatar_url} alt="Imagem do Usuário" />
          </figure>
        </div>
      ))}
    </div>
  );
}
