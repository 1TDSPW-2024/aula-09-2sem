import { useState } from "react";

export default function Usuarios(){

    //MUDANDO O TÍTULO DA PÁGINA!!!
    document.title = "Usuarios";
    const [usuario, setUsuario] = useState({
      login: "",
      avatar_url:""
    });
    
      //Realizando uma requisição para uma API-REST(api do github) com fetch
      fetch('https://api.github.com/users/alecarlosjesus')
      .then(response =>{
          if(!response.ok){
              throw new Error(`Erro: ${response.status}`);
            }
        return response.json();
        })
        .then(data => {
          console.log(data);
          setUsuario(data);
        })
        .catch(error => console.error("Erro ao buscar usuário : ", error));
      
    return(
      <div>
        <h1>Bem Vindo!</h1>

          <h2>{usuario.login}</h2>

          <figure>
            <img src={usuario.avatar_url} alt="Imagem do Usuário"/>
          </figure>


      </div>
    );
  }