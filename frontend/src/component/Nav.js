import {Link} from "react-router-dom"


export default function Nav(){
    return(
        <nav class="navbar">
            <Link to="/" class="navbar-brand"> Home Page </Link>
            <div class="nav">
                <Link to="/register" class="nav-link"> Signup </Link>
                <Link to="/login" class="nav-link"> Login </Link>
                <Link to="/create-fitness" class="nav-link"> Fitness Form </Link>
                <Link to="/fitness-list" class="nav-link"> Fitness List </Link>
            </div>
        </nav>
    )
}