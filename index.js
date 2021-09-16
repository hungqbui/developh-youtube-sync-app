import express from 'express'
import path from 'path'

const app = express()

const __dirname = path.resolve()

express()
  .use(express.static(path.join(__dirname, 'src')))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(5500, () => console.log(`Listening on 5500`))





