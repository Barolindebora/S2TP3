import superHeroRepository from "./repositories/SuperHeroRepository"
//utiliza los metodos del repositorio para buscar , filtrar, etc
 //separa los metodos del repositorio con el fin de que este solo se ocupe de la base de datos
export async function obtenerSuperheroesPorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function obtenerSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
    }





