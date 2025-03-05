
//punto unico de configuracion, facilita mantenimiento y escalabilidad
import mongoose from 'mongoose';

export async function  conectDB () {

    try {
        await mongoose.connect ('mongodb+srv://Grupo-03:grupo03@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexión exitosa a MongoDB')
    }
    catch(error){
        console.error ('Error al conectar a MongoDB',error);
        process.exit(1)
    }
    
}