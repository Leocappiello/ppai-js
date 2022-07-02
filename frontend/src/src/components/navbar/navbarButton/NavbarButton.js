import React from 'react'
import './navbarButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const NavbarButton = () => {
    const styles = {
        button: {
            width: '25%'
        }
    }
    return (
        <>
            <button className='navbarButton' style={styles.button}>
                <FontAwesomeIcon icon={faBook} />Turnos
            </button>
        </>
    )
}

export default NavbarButton