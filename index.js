const jsonServer = require('json-server')

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

const mediaPlayerServer = jsonServer.create()

mediaPlayerServer.use(middleware)

mediaPlayerServer.use(router)

const PORT = 3000 || process.env.PORT

mediaPlayerServer.listen(PORT,()=>{
    console.log(`Server running successfully at port number ${PORT}`);
    
})

