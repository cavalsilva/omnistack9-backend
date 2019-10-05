const User = require('../models/User');

module.exports = {
    async store(req, res){
        // Busca informações dentro de uma variável, pode usar também o const email = req.body.email;
        const { email } = req.body;

        // Pesquisando de forma reduzida, para quando for o mesmo mesmo { email } é igual a { email : email }
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });            
        }

        return res.json(user);
    }
}