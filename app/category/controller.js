module.exports={
    index: async(req,res)=>{
        try {
            res.render('index',{
                title : 'store_game_back'
            })
        } catch (error) {
            console.log(error)
        }
    }  
}
