import Email from "../valueObjects/Email";
import Senha from "../valueObjects/Senha";


class Usuario {
    private id:number;
    private email:string;
    private senha: string;
    constructor(id?:number, email:string, senha:string){
        if(id){
            this.id=id;
        };
        this.email=email;
        this.senha=senha;
    }

    public getId():number{
        return this.id;
    }

    public getEmail():string{
        return this.email;
    }

    public getSenha():string{
        return this.senha;
    }

    public setSenha(senha:string):void{
        this.senha = new Senha(senha);
    }
}

export default Usuario;