class Senha{
    private senha: string;

    constructor(senha: string){
        if(!this.validadorSenha(senha)){
            throw new Error("A senha digitada é inválida, ela deve conter 8 caracteres, sendo uma letra maiúscula, uma letra minúscula, um número e um caracter especial.");
        }
        this.senha = senha;
    }

    private validadorSenha(senha: string):boolean{
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(senha);
    }

    getValue():string{
        return this.senha;
    }

    equals(other:Senha):boolean{
        return this.senha === other.senha;
    }
}

export default Senha;