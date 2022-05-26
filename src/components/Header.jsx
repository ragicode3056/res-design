import classes from './styles/header.module.css';
import logo from './assests/logo.png';
import prerson from './assests/peronNotify.png';
export const Header = () =>{
    return(
        <div className={classes.headerLayout}>
               <img src={logo} alt = "logo-text" />
               <div className={classes.headerContent}>
                    <img src={prerson} alt = "logo-text" className={classes.logoImg} />
                    <select className={classes.selectEle} name = "fname" id="fname">
                        <option value="John">John</option>
                        <option value = "Tom">Tom</option>
                    </select>
               </div>
              
        </div>
    )
}