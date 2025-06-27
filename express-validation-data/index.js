import express from 'express'

const server = express()

server.use(express.text());
server.use(express.json());

server.listen(3000, () => {
    console.log('se prendio la mamalona')
})