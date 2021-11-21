import React from 'react'
import { Link } from 'react-router-dom'

import './error404.scss'

export default function Error404() {
    return (
        <div className='error404'>
            <h1> Error 404 ...</h1>
            <h1>Pagina no encontrada</h1>
            <Link to='/'>
                <h3>Volver al Inicio</h3>
            </Link>

        </div>
    )
}
