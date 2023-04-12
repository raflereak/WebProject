const express = require('express');
const app = express();
const bcrypt = require('bcrypt')

const sequelize = require('./models/index').sequelize;
const bodyParser = require('body-parser')

sequelize.sync();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const {
  Employer,
  Employee,
  StoreInfo,
  Notices_handover,
  Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

app.get('/login/:id/:password/boss', async (req,res) => {
  try{
    const user = await Employer.findOne({
      where: {id : req.params.id},
    })
    if(user){
      result = await bcrypt.compare(req.params.password, user.password)
      if(result){
        return res.json(user)
      }
      else{
        return res.send("비밀번호 오류")
      }
    }
  }catch(error){
    return res.send('사용자가 없음')
  }
})

app.get('/login/:id/:password/arba', async (req,res) => {
  try{
    const user = await Employee.findOne({where : {id: req.params.id}})
    if(user){
      result = await bcrypt.compare(req.params.password, user.password)
      if(result){
        return res.json(user)
      }
      else{
        return res.send("비밀번호 오류")
      }
    }
  }catch(error){
    return res.send('사용자가 없음')
  }
})

app.post('/register', async (req,res) => {

  try{
    const exUser = await Employer.findOne({where: {id:req.body.id}})
    if(exUser){
      return res.send("유저가 있습니다")
    }
    else{
      const store = req.body.id + "store"
      const hash_password = await bcrypt.hash(req.body.password, 12)
      const hash_bank = await bcrypt.hash(req.body.bank_account, 12)

      const user = await Employer.create({
        id: req.body.id,
        password: hash_password,
        name: req.body.name,
        age: req.body.age,
        bank_account : hash_bank,
        store: store,
        type: "사장",
      })
      console.log(user)
      res.json(user)
    }
  }
  catch(err){
    console.log(err)
  }
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})