import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    
    const navigate = useNavigate();
    
    return(
        <header id="headerSection" className={styles.headerContainer}>
            <h1 className='headerDevName'>
                <a onClick={()=>{navigate('/')}}><img  alt='Logo'  src={require('../img/eva-l.png')  } className={styles.imgLogo } /></a>                
            </h1>
            <nav className={styles.referencesList}>
                <ul>
                    <li><a href="https://www.linkedin.com/in/dylan-vallejo" target="_blank">Contact</a></li>
                </ul>
            </nav>
        </header>  
    )
} 

export default Header;