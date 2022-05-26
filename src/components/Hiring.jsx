import classes from './styles/header.module.css';
import stripe from './assests/stripes.png';
export const Hiring = () =>{
    return (
        <div>
            <div className={classes.Hiring}>We're Hiring    <em className={classes.Role}>Sr. UX Designer</em></div>
        <div>
        <img alt = "Stripes" src = {stripe}/> 

        </div>
            </div>
    )
}