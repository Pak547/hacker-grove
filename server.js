const port = process.env.PORT || 3001
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
