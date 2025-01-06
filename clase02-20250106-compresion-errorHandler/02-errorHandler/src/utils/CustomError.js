export class CustomError{
    static generarError(name, message, cause, code){
        let error=new Error(message, {cause})
        error.code=code
        error.name=name
        error.custom=true

        throw error
    }
}