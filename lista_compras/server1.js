const { response, request } = require("express")
const express = require("express") 
const PORT = 3333 

const app = express()

app.use(express.json())
//https://localhost:3333

/*metodos http 
-get -> mostrar informação
-post -> criar informação
-put -> atualizar informação
-delete -> deletar informação
*/

/*codigo http 
-200 - 299 -> respostas bem-sucedidas
-300 - 399 -> mensagens de redirecionamento
-400 - 449 -> respostas de erro do cliente
-500 - 549 -> respostas de erro do servidor*/

//https://localhost:3333/product
app.get('/product', (request, response)=>{
return response.status(200).send('ola, mundo')
})

//route PARAMS
app.get('/product/:id', (request, response)=>{
    //const {id} = request.params
    const id = request.params.id
    return response.status(200).json("ola mundo"+id)
});
//route query /?nome=telefone
app.get('/product', (request, response)=>{
    Console.log(request.query.name)
    return response.status(200).json("nome produto:"+ name);
});

//route body
app.post("/product", (require, response)=>{
    const {id, name} = request.body
})

app.listen(PORT, ()=>{
    console.log(`Servidor ON`)
})

console.log(app)