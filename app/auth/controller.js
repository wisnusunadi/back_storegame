const Player = require('../player/model')
const path = require('path')
const fs = require('fs')
const config = require('../../config')

module.exports = {
  sign_up : async (req,res,next) => {
    try {
    //  const {email, name , username, password} = req.body
      const payload = req.body
      if(req.file){
        let tmp_path = req.file.path;
        let originaExt = req.file.originalname.split('.')[req.file.originalname.split('.').length - 1];
        let filename = req.file.filename + '.' + originaExt;
        let target_path = path.resolve(config.rootPath, `public/uploads/${filename}`)

        const src = fs.createReadStream(tmp_path)
        const dest = fs.createWriteStream(target_path)

        src.pipe(dest)

        src.on('end', async () => {
          try {

            const player = new Player({...payload ,avatar:filename})
            await player.save();
 
            delete player._doc.password
            res.status(200).json({data : player})
          } catch (err) {
            if(error && error.name === 'Validation Error'){
              return res.status(422).json({
                message : error.message,
                fields : error.errors
              })
            }
          }
        })
      }else{
        let player = new Player(payload)
        await player.save()
        delete player._doc.password
        res.status(200).json({data : player})

      }

     
    } catch (error) {
      if(error && error.name === 'Validation Error'){
        return res.status(422).json({
          message : error.message,
          fields : error.errors
        })
      }
      next(error)
    }
  },
  sign_in : async (req,res,next) => {
    try {
      
    } catch (error) {
      
    }
  }
} 