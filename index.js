const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MAPEAMENTO DA PASTA PUBLIC
app.use(express.static('public'));

//CONFIGURA O EJS COMO VIEW ENGINE (REDENRIZA AS PÁGINAS DE FRONT-END)
app.set('view engine', 'ejs');


//ROTA DE CADASTRO DE CATEGORIAS
app.get('/cadastroCategorias', (req, res)=>{
    res.render('categoria/index');
});



//ROTA DE LISTAGEM DE CATEGORIAS
app.get('/listagemCategorias', (req, res)=>{
    
    const urlListagemCategoria = 'http://localhost:3000/listarCategoria';

    /*
    CHAMADA PELO AXIOS:
    1 - URL DA ROTA (urlListagemCategoria)
    2 - CALLBACK DA RESPOSTA DA CHAMADA
    */
    axios.get(urlListagemCategoria)
        .then(
            (response)=>{
                // console.log(response.data);
                // res.send(response.data);
                let categorias = response.data;
                res.render('categoria/listagemCategoria', {categorias});

        }); 
    });

app.listen(3001, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});



                                        //****************PARTE INSTRUMENTO****************** */




                         

//ROTA DE CADASTRO DE INSTRUMENTO 
app.get('/cadastroInstrumento', (req, res)=>{
    res.render('instrumento/index');
});


//ROTA DE LISTAGEM DE INSTRUMENTOS
app.get('/listagemInstrumento', (req, res)=>{
    
    const urlListagemInstrumento = 'http://localhost:3000/listarInstrumento';

    /*
    CHAMADA PELO AXIOS:
    1 - URL DA ROTA (urlListagemCategoria)
    2 - CALLBACK DA RESPOSTA DA CHAMADA
    */
    axios.get(urlListagemInstrumento)
        .then(
            (response)=>{
                // console.log(response.data);
                // res.send(response.data);
                let instrumentos = response.data;
                res.render('categoria/listagemInstrumento', {instrumentos});

        }); 
    });

app.listen(3002, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3002');
});

