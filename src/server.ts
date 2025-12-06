import app from './app'
import 'dotenv/config';

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server rodando em - http://localhost:${PORT}`)
})