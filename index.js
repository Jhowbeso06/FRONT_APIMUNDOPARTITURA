const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(express.static('public'));


app.set('view engine', 'ejs');



app.get('/cadastroCategorias', (req, res)=>{
    res.render('categoria/index');
});

//INSTRUMENTO
app.get('/cadastroInstrumento', (req, res)=>{
    res.render('categoria/index');
});


app.get('/listagemCategorias', (req, res)=>{
    
    const urlListagemCategoria = 'http://localhost:3000/listarCategoria';

 
    axios.get(urlListagemCategoria)
        .then(
            (response)=>{
              
                let categorias = response.data;
                res.render('categoria/listagemCategoria', {categorias});

        }); 
    });


//INSTRUMENTO


app.get('/listagemInstrumento', (req, res)=>{
    
    const urlListagemInstrumento = 'http://localhost:3000/listarInstrumento';

 
    axios.get(urlListagemInstrumento)
        .then(
            (response)=>{
              
                let instrumento = response.data;
                res.render('categoria/listagemInstrumento', {instrumento});

        }); 
    });



    app.get('/formEdicaoCategorias/:id', (req, res)=>{
        
        let {id} = req.params;
       
        const urlListagemCategoria = `http://localhost:3000/listarCategoria/${id}`;
        


        axios.get(urlListagemCategoria)
        .then(
            (response)=>{

                let categoria = response.data;
                res.render('categoria/editarCategoria', {categoria});

            }
        )
    });


//INSTRUMENTO


app.get('/formEdicaoInstrumento/:id', (req, res)=>{
        
    let {id} = req.params;
   
    const urlListagemInstrumento = `http://localhost:3000/listarInstrumento/${id}`;
    


    axios.get(urlListagemInstrumento)
    .then(
        (response)=>{

            let instrumento = response.data;
            res.render('categoria/editarIntrumento', {instrumento});

        }
    )
});





    app.post('/alterarCategoria', (req, res)=>{

        const urlAlterarCategoria = 'http://localhost:3000/alterarCategoria';
        console.log(req.body);

        axios.put(urlAlterarCategoria, req.body)
        .then(
            res.send('ALTERADO!')
        )

    });

    //INSTRUMENTO





    app.post('/alterarInstrumento', (req, res)=>{

        const urlAlterarInstrumento = 'http://localhost:3000/alterarInstrumento';
        console.log(req.body);

        axios.put(urlAlterarInstrumento, req.body)
        .then(
            res.send('ALTERADO!')
        )

    });


app.listen(3001, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});
