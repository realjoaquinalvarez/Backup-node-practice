
import { CorsOptions } from "cors";

export const corsCofig : CorsOptions = {
    origin: function( origin, callback) {
        if( origin === 'http://localhost:5173'){
            console.log('Permitir conexion')
        }else{
            callback(new Error('Error de CORS'))
        }
    }
}
