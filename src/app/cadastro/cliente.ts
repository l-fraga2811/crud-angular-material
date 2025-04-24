import { v4 as uuidv4 } from 'uuid';


export class Client {
    id?: string;
    name?: string;
    birthDate?: string;
    email?: string;
    cpf?: string;
    
    static newCliente(){
        const cliente = new Client();
        cliente.id = uuidv4();
        cliente.name = "";
        cliente.birthDate = "";
        cliente.email = "";
        cliente.cpf = "";
        return cliente;
    }
}