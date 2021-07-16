import "../css/Login.css";
import React, {Component} from "react";

class SignUp extends Component{


    state={
        form:{
            username:'',
            password:'',
            mail:''
        }
    }
    handlechange=async e=>{
        await this.setState({
            ...this.setState.form,
            [e.target.name]:e.target.value
        });
        console.log(this.state.form)
    }

    render(){
        return(
            <div className="container">
            <h1 className="logo animate__animated animate__backInUp">PANDELLO <span>reto</span></h1>
            <div className="lg animate__animated animate__backInDown">
                <div className="lg-info">

                    <h3>Registrarse</h3>
                    <form className="animate__animated animate__bounce">
                        <p>
                            <label>Usuario</label>
                            <input 
                                type="text" 
                                name="username"
                                onChange={this.handlechange}
                            />
                        </p>
                        <p>
                            <label>Contraseña</label>
                            <input 
                                type="password" 
                                name="password"
                                onChange={this.handlechange}
                            />
                        </p>
                        <p>
                            <label>Correo Electrónico</label>
                            <input 
                                type="email" 
                                name="mail"
                                onChange={this.handlechange}
                            />
                        </p>
                        <p>
                        <button><a href="./Joined">Registrarme</a></button>
                        </p>
                        
                        <p><a href="./">Ya tengo cuenta</a></p>
                    </form>
                </div>
                <div className="lg-img">


                </div>


            </div>
        </div>

        );

    }
}

export default Joined;