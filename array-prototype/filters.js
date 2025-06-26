const user = {
    name: 'Diego',
    age: 20
}

const usuarios = [user,user,user,user]

console.log(usuarios)

function isNegro(name) {
    if (name === 'Jael') {
        return false
    }

    return true
}

const arraySinNegro1 = usuarios.filter(isNegro)

console.log('Sin negro 1', arraySinNegro1)

const isNegro2 = (name) => {
    if (name === 'Jael') {
        return false
    }

    return true
}

const arraySinNegro2 = usuarios.filter(isNegro2)

console.log('Sin negro 2', arraySinNegro2)

const arraySinNegro3 = usuarios.filter(
    (name) => {
        if (name === 'Jael') {
            return false
        }

        return true
    }
)
usuarios.filter(
    (name, index) => {
    }
)

console.log('Sin negro 3', arraySinNegro3)