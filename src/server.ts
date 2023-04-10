import express from "express"

const app = express()

console.log("Testando...")

app.listen(3333, () => {
    console.log('Server listening on port 3333');
});