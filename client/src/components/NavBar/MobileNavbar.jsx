import { useState } from "react";
import './MobileNavBar.css'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx"
import { RiCloseFill} from "react-icons/ri"

const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='mobileNavContainer'>
            {
                !isOpen ?
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Link to='/' style={{color: 'white'}}><h2 style={{textAlign: 'center'}}>POKESHAI</h2></Link>
                    <button className="mobileNavButtons" type="button" onClick={toggleMenu}>
                        <RxHamburgerMenu color="white" size={40} />
                    </button>
                </div>
                :
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <h2>POKESHAI</h2>
                    <button className="mobileNavButtons" type="button" onClick={toggleMenu}>
                        <RiCloseFill color="white" size={40} />
                    </button>
                </div>
            }
            {
                isOpen ? 
                <div style={{textAlign: 'center'}}>
                    <Link className='mobileLinks' to='/'>HOME</Link>
                    <br />
                    <Link className='mobileLinks' to='/pokemons'>POKEMONS</Link>
                    <br />
                    <Link className='mobileLinks' to='/whoIsThatPokemon'>WHO IS THAT POKEMON?</Link>
                    <br />
                    <Link className='mobileLinks' to='/higherOrLower'>HIGHER OR LOWER?</Link>
                </div> : ''
            }
        </div>
    )
}

export default MobileNavbar