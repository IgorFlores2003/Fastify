async function routes(fastify, options) {

    fastify.get('' , async (req,res) => {
        res.send({
            id: req.params.id,
            firstname: "Igor",
            lastname: "Flores"
        })
    })
}
module.exports = routes
