const fastify = require('fastify')()

fastify.register(require('./routes/users'),{prefix:'/users'})

//start server

fastify.listen(3000, function(err, address){
if(err){
console.log(err)
process.exit(1)
}
else{
    console.log("Server ready in port 3000")
}
})