export class UserDTO{
    constructor(user){
        this.nombre=user.name
        this.email=user.email
        this.rol=user.rol || "user"
    }
}