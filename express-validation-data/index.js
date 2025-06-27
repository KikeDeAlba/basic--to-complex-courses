import express from 'express'

const server = express()

server.use(express.text());
server.use(express.json());

// En la respuesta deben enviar la data solicitada queya fue validada

// Generar un endpoint GET que reciba 2 pathParams y valide que el segundo sea un numero y el primero un texto de menos de 6 letras
// Omar
server.get('/omar/:text/:number', (request, response) => {
    const pathParams = request.params;
    const text = pathParams.text;
    const number = Number(pathParams.number);
    if (text.length < 6 && !Number.isNaN(number)) {
        return response.status(200).json({
            "message": "eres un chingon",
            "data": pathParams
        })
    } else {
        return response.status(400).json({
            "message": "la tas cagando mijo"
        })
    }
})

/*
Mejora del codigo de omar en legibilidad
server.get('/omar/:text/:number', (request, response) => {
    const pathParams = request.params;
    const text = pathParams.text;
    const number = Number(pathParams.number);

    if (text.length > 6 || Number.isNaN(number)) {
        return response.status(400).json({
            "message": "la tas cagando mijo"
        })
    }

    return response.status(200).json({
        "message": "eres un chingon",
        "data": pathParams
    })
})
*/

// Pedro
server.get('/pedro/:texto/:number', (req, res) => {
    const texto = req.params.texto;
    const numeroString = req.params.number;
    const numero = Number(numeroString);

    if (texto.length >= 6) {
        return res.status(400).send('Son menos de 6 mamon');
    }
    if (isNaN(numero)) {
        return res.status(400).send('Tiene que ser un numero papoi')
    }
    return response.status(200).json({
        "menssage": 'Todo Chidote'

    })


})

/*
server.get('/pedro/:texto/:number', (req, res) => {
    const texto = req.params.texto;
    const numeroString = req.params.number;
    const numero = Number(numeroString);

    if (texto.length > 6) {
        return res.status(400).json({
            message: 'Son menos de 6 mamon'
        });
    }

    if (isNaN(numero)) {
        return res.status(400).json({
            message: 'Tiene que ser un numero papoi'
        })
    }

    return res.status(200).json({
        "menssage": 'Todo Chidote'
    })
})
*/

// Jael
server.get('/jael/text/:message/:number', (request, response) => {
    const pathParams = request.params;
    console.log (pathParams) 
    const message = pathParams.message
    const number = pathParams.number

    if (message.length>6){
        return response.status(400).json({
            "message": "Mas de 6 letras"
        })
    } 

    const number1=Number(number)
    if (Number.isNaN(number1)) {
        return response.status(400).json({
            "message": "No es un numero"
        }

        )
    }

    return response.status (200).json({
        number1, message
    }
    )
})
/*
server.get('/jael/text/:message/:number', (request, response) => {
    const pathParams = request.params;
    console.log(pathParams)
    const messageInPath = pathParams.message
    const numberInPath = pathParams.number

    if (messageInPath.length > 6) {
        return response.status(400).json({
            "message": "Mas de 6 letras"
        })
    }

    const formattedNumber = Number(numberInPath)
    if (Number.isNaN(formattedNumber)) {
        return response.status(400).json({
            "message": "No es un numero"
        })
    }

    return response.status(200).json({
        number: formattedNumber, message: messageInPath
    })
})
*/

// Generar un get que reciba 3 query params, uno de ellos opcional y los otros dos obligatorios he ignore todos los query params no mapeados

// Generar un POST que reciba por medio del body dos valores, uno de tipo numerico y otro de tipo boolean y devolver el valor de tipo numerico en la respuesta solo si el valor del tipo boolean es true

server.listen(3000, () => {
    console.log('se prendio la mamalona')
})