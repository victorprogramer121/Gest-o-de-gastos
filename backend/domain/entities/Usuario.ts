import Email from "../valueObjects/Email";
import Senha from "../valueObjects/Senha";


class Usuario {
    private id?:number;
    private email:Email;
    private senha: Senha;
    constructor(email:string, senha:string, id?: number){
        this.email=new Email(email);
        this.senha=new Senha(senha);
        if(id){
            this.id=id;
        };
    }

    public getId():number{
        if(!this.id){
            throw new Error("Id não definido");
        }
        return this.id
    }

    public getEmail():Email{
        return this.email;
    }

    public getSenha():Senha{
        return this.senha;
    }

    public setEmail(email:string):void{
        this.email = new Email(email);
    }

    public setSenha(senha:string):void{
        this.senha = new Senha(senha);
    }
}

export default Usuario;