import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";
//utiliza los metodos del repositorio para buscar , filtrar, etc
 //separa los metodos del repositorio con el fin de que este solo se ocupe de la base de datos
export async function obtenerSuperheroesPorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function obtenerSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
    }





