import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import '../css/Login.css';

class Login extends Component{
	state={
        form:{
            username:'',
            password:''
        }
    }


    render() {
        return (
    	<body>
        <h1>
        	Pandello Recluta - Reto técnico <span></span>
        </h1>
        <div className="containerPrincipal">


        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button name= "btn btn 1"><a href="./Join">Iniciar Sesión</a></button>
			<button name= "btn btn 2"><a href="./SignUp">No tengo una cuenta</a></button>

          </div>
        </div>
      </div>
      </body>
        );
    }  
}

export default Login;