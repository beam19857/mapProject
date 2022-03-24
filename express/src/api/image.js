var express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//models
var Schema = require('mongoose').Schema
const imageSchema = Schema({
    image: String,
    address: String,
    owner: {type: mongoose.Schema.Types.ObjectId,ref:'user'}
}, {
    collection: 'image'
})
let Image
try {
  Image = mongoose.model('image')
} catch (error) {
    Image = mongoose.model('image', imageSchema)
}

const insertImage = (dataImage) => {
    return new Promise((resolve, reject) => {
      var new_image = new Image({
        _id: mongoose.Types.ObjectId(),
        owner: dataImage.owner,
        address: dataImage.address,
      });
      new_image.save((err, data) => {
        if (err) {
          reject(new Error("Cannot insert image to DB!"));
        } else {
          resolve({ message: "Sign up successfully" });
        }
      });
    });
  };

  const getImage = (uid) => {
    return new Promise((resolve, reject) => {
      Image.find({owner:uid},(err, data) => {
            console.log(data)
            if(data){
                resolve(data)
                //reject(new Error('Cannot get User Data'))
            }
            else{
                reject(new Error('Cannot get User Data'))
            }
        })
  
    })
  }

  router.route('/add/:id')
.post((req, res) => {
    console.log('start')
    console.log(req.body)
    console.log('end')
    //const i  = 0;
    const cout = req.body.length
    console.log(cout)
        const payload = {
         owner: req.params.id,
         product: req.body.product,
        }
        console.log(payload)
        insertImage(payload)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            })
            console.log('End');
    });

    router.route('/get/:id')
    .get((req,res) => {
        const uid = req.params.id
        console.log(uid)
        getImage(uid)
        .then(result => {
        })
        .catch(err => {
            console.log(err)
        })
        Image.find({owner:uid}).populate('user').exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.delete("/delete/:image_id", function(req, res) {
      console.log('Deleted Image');
      Image.findByIdAndDelete(req.params.image_id)
        .then(image => {
          if (image) {
            return res.status(200).json(`Image deleted! Deleted Image details: ${image}`);
          } else {
            return res.status(404).send("image not found");
          }
        })
        .catch(err => {
          res.status(500).send(`Error details: ${err.message}`);
        });
    });
    
    module.exports = router;