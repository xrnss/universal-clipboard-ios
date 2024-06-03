import clipboard from "clipboardy"
import express from "express"

const app = express()
const port = 9147

app.use(express.json());

app.post('/copytopc', (req, res) => {
    console.log("hello")
    res.status(200).send("hi");

    try {
        let update = req.body.data
        clipboard.writeSync(update)
        console.log("wrote to clipboard: " + update)
    } catch(e) {
        console.log(e)
    }
})

app.get('/copyfrompc', (req, res) => {
    try {
        res.status(200).send(clipboard.readSync())
    } catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})