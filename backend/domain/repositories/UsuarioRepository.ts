import Usuario from "../entities/Usuario"

export interface UsuarioRepository{
    criarUsuario(usuario:Usuario):Promise<number>;
    buscarPorId(id:number):Promise<Usuario | null>;
    atualizarUsuario(admin: Usuario): Promise<boolean>;
    listar(): Promise<Usuario[]>;
}