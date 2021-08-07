import React, {useState} from 'react';
import { Link, useHistory} from 'react-router-dom';


const Login = () => {

    const history= useHistory();
    const [email, setEmail]= useState(' ');
    const [password, setPassword]= useState(' ');
    
const lognUser = async (e) => {
        e.preventDefault();

       const res = await fetch('/signin', {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },

        body: JSON.stringify({
             email, 
             password
        })
    });

    const data= await res.json();

    if (data.status === 400 || !data){
        window.alert("Invalid Login");
    }else{
        window.alert("successfully Login");

        history.push("/");
    }



}   

    return (
        <div>
<section id="cover" className="min-vh-100">
    <div id="cover-caption">
        <div className="container">
            <div className="row text-white">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">

                    <h1 className="display-4 py-2 text-truncate">Fill All Details ....</h1>
                    <div className="px-2">
                        <form method="POST" class="justify-content-center">
                            
                            <div className="form-group">
                                <input type="email" name="email" id="email" class="form-control"

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                 placeholder="Enter@example.com" />
                             
                               
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" id="password" class="form-control"

                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                 placeholder="***Password***"/>
                            </div>

                            <button type="submit" name="signin" id="signin" class="btn btn-primary btn-lg" value="signin" onClick={lognUser}>SignIn</button>
                            <span className="material-icons "><i className="zmdi zmdi-account"></i><u><Link  className= "nav_link" to="/Signup">Create New Account</Link></u></span>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Login;
