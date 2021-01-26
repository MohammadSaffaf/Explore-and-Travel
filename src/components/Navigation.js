import React from 'react'
const Navigation = () => {
   
    return ( 
        <article>
            <nav>
                <a href="/"><img src="./assets/img/logo.png" alt=""/></a>
                <ul className="ulNav">
                    <li><a href="/">Home</a></li>
                    <li ><a href="/Destinations">Destinations</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Partner">Partner</a></li>
                    </ul>
                  
                    <div id="button">
                    <button className="login"> Login</button>
                    <button className="register">Register</button>
                    </div>
            </nav>
            
        </article>
     );
}
 
export default Navigation;