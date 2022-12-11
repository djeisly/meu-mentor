const app = require("./src/app")
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}   
Swagger http://localhost:3000/minha-documentacao`);
});

