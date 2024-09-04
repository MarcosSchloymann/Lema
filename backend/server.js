const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())

app.post('/api/files', async(req, res) => {

})

app.listen(PORT, () => {
    console.log(`server http://localhost:${PORT}`)
})
