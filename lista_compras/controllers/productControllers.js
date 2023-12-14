const { request, response } = require('express')
const conn = require('./')



static createproduct(request, response){

    try {
        if(!request.body.nome || ! request.body.quantidade)
        return response.status(400).json({
            message:"por favor, preencha os campos",
        });
    }

    const {nome, quantidade} = request.body
    //comando dml manupulação
    const sql = `INSERT INTO tb_compras (nome, quantidade) VALUES ("${nome}", "${quantidade}")`,

    conn.query(sql, (error) =>{
        if(error){
            console.log(error)vgwwfwffwfsfwtggeffefefrggdjunfegb
        }
    })
    response.redirect('/product')
    } catch (error) {
        console.log(error)
    }
}

static getproduct(request, response){
    response.redirect
}
static updateproduct(request, response){}
static removeproduct(request, response){}
try {
    const {id} = request.params;
    const sql = `delete from tb_compras where id=${id}`;
    conn.query(sql, (err)=>{
        
    })
    
} catch (error) {
    
}

}

};