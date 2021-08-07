import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Signup = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name:" ",email:" ",phone:" ",work:" ",password:" ",cpassword:" "
    });

    let name, value;
    const handleInputs = (e) =>{
    // e.preventDefalut();
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
}


    const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone , work, password, cpassword } = user;

    const res = await fetch('/register', {

            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },

            body: JSON.stringify({
                name, email, phone , work, password, cpassword 
            })
        });

            const data= await res.json();

            if (data.status === 422 || !data){
                window.alert("Invalid Registration");
                console.log("Invalid Regisration");
            }else{
                window.alert("successfully Registration");
                console.log("successfully Regisration");

                history.push("/Login");
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

                                                <form method="POST" className="justify-content-center">
                                                    
                                                <div className="form-group">
                                                       <input type="text" class="form-control" name="name" id="name" 

                                                        value={user.name}
                                                        onChange={handleInputs}
                                                        placeholder="Enter Your Name"
                                                        />   
                                                        </div>      
                                                    
                                                    <div className="form-group">
                                                         <input type="email" class="form-control" name="email"  
                                                        
                                                        value={user.email}
                                                        onChange={handleInputs}
                                                        placeholder="Enter@example.com"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                            <input type="number" class="form-control" name="phone"  

                                                        value={user.phone}
                                                        onChange={handleInputs}
                                                        placeholder="Phone Number"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" class="form-control" name="work"  

                                                        value={user.work}   
                                                        onChange={handleInputs}
                                                        placeholder="Enter Your Work"
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                          <input type="password" class="form-control" name="password"  

                                                        value={user.password}
                                                        onChange={handleInputs}
                                                        placeholder="***Password***" 
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                         <input type="password" class="form-control" name="cpassword"  

                                                        value={user.cpassword}
                                                        onChange={handleInputs}
                                                        placeholder="***cPassword***" 
                                                        />
                                                    </div>

                                                    <button type="submit" name="signup" id="signup" className="btn btn-primary btn-lg" 
                                                    value="register" onClick={PostData} >Signup</button>

                                                    <span className="material-icons md-dark"><i className="zmdi zmdi-arrow-right"></i><u><Link  className= "nav_link" to="/Login">Already create Login</Link></u></span>
                                                    
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

export default Signup;
