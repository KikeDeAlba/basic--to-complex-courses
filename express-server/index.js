import express from 'express'

const server = express()

server.get('/youtube', (request, response) => {
    return response.status(200).json({
        "message": "todo chido"
    })
})

server.listen(3000, () => {
    console.log('se prendio la mamalona')
})