//interfaz que proporciona abstraccion de los metodos CRUD
class IRepository{
    obtenerPorId(id){
        throw new Error('Metodo obtenerPorID() no implementado');
    }

    obtenerTodos(){
        throw new Error('Metodo obtenerTodos() no implementado');
    }

    buscarPorAtributo(){
        throw new Error('bucarPorAtributo() no implementado');
    }

    obtenerMayoresDe30(){
        throw new Error('Metodo obtenerMayoresDe30() no implementado');
    }

}

export default IRepository;