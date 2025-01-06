import os from "os"

export const altaHeroeError=heroe=>{
    let {name, ...otros}=heroe   // ... son el operador rest... 
    let detalleError=`
Error al dar de alta un Heroe.
Propiedades esperadas:
    - requeridas:
        - name, de tipo string. Se recibió: ${name}
    - opcionales:
        - 'alias','publisher','powers','team', de tipo string. Se recibió: ${JSON.stringify(otros)}

Fecha: ${new Date().toLocaleString()}
Terminal: ${os.hostname()}
Usuario: ${os.userInfo().username}
    `

    return detalleError
}