//lista de compras -> nome produto quantidade

const { request, response } = require('express')
const conn = require('./db/conn')

const app = express()

//aceiatr dados json
app.use(express.urlencoded({entended: true}))
app.use(express.json())

//configurar handlebatsss
app.engine('handlebars', exphbs.engine())
app.set("view engine", 'handlebars')

//atribuir o css
app.use(express.static('public'))

//
const producRouter = require('./ro')

app.listen(3333, ()=>{
    console.log(`Servidor ON`)
});
