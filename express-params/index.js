import express from 'express'

const server = express()

server.use(express.text());
server.use(express.json());

// Parametros

// Path params
// busacar un usaurio /usuario/:x valor
// /usuario/juan
server.get('/player/:playerName', (request, response) => {
    const pathParams = request.params;
    console.log(pathParams)

    return response.status(200).json({
        "message": `El juegador que estoy buscando se llama ${pathParams.playerName}`,
    })
})

// Query params
// /player?param1=Omar&param2=Enrique&param3=Juan
server.get('/player', (request, response) => {
    const queryParams = request.query;
    const { name, age, dogName } = queryParams;

    if (!dogName) {
        return response.status(400).json({
            "message": "Wey, mandame un nombre we"
        })
    }

    return response.status(200).json({
        "queries": {
            name,
            age,
            dogName,
        },
    })
})

function createPlayer(body) {
    // do something
    console.log(body)
}

// Body
server.post('/player', (request, response) => {
    const body = request.body

    createPlayer(body)

    return response.status(200).json({
        "message": "Jugador creado",
        "data": body
    })
})

server.listen(3000, () => {
    console.log('se prendio la mamalona')
})