import express from "express"
import os from "os"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    let msg = `Hello from ${os.hostname()}`
    console.log(msg)
    res.send(msg)
    }
)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
    }
)