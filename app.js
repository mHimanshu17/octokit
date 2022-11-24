// const { setHeaders } = require('./middleware');
const routes  = require('./routes');

const express = require('express');
// const cors = require('cors');

const app = express();

const PORT = 4000;

// app.use(express.json());
// app.use(cors());
// app.use(setHeaders);
app.use('/github_api', routes);

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.listen(PORT, ()=>console.log(`Server started running on ${PORT}...`));