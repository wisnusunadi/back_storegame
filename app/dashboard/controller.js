const Transaction = require('../transaction/model')
const Voucher = require('../voucher/model')
const Player = require('../player/model')
const Category = require('../category/model')

module.exports = {
    index: async (req, res) => {
        const transaction = await Transaction.countDocuments()
        const category = await Category.countDocuments()
        const player = await Player.countDocuments()
        const voucher = await Voucher.countDocuments()
        try {
            res.render('admin/dashboard/view_dashboard', {
                name: req.session.user.name,
                title: 'Dashboard',
                count: {
                    transaction, category, player, voucher
                },
            })
        } catch (error) {
            console.log(error)
        }
    }
}
