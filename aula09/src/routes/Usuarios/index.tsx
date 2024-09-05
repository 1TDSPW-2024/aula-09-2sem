import { useEffect, useState } from "react";

export default function Usuarios(){

    //MUDANDO O TÍTULO DA PÁGINA!!!
    document.title = "Usuarios";
//   const [usuario, setUsuario] = useState({
//     login: "",
//     avatar_url:""
//   });

const [usuarios, setUsuarios] = useState([{
  login: "",
  avatar_url:""
}]);
    

    useEffect(()=>{

      
      //Realizando uma requisição para uma API-REST(api do github) com fetch
    async function carregarUsuarios(){
      try{ 
        const response = await fetch('https://api.github.com/users');
        if(!response.ok){
          throw new Error("Ocorreu um erro ao receber os dados");
        }
        const dados = await response.json();
        setUsuarios(dados);
      }catch(err){
        console.log(err);
      }
    }

  carregarUsuarios();

    
      
  },[]);

      
    return(
      <div>
        <h1>Bem Vindo!</h1>


        { usuarios.map((usuario)=> (
          <div key={usuario.login}>
            <h2>{usuario.login}</h2>
            <img src={usuario.avatar_url} alt={usuario.login} />
          </div>
        ))}

      </div>
    );
  }