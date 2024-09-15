import {getUserById, insertUser} from "./../models/usuariosModels.js"
import {getUsernameAndPassword} from "./../models/usuariosModels.js"
import bcrybt, { compare } from 'bcrypt'
import { createAccessToken } from "../libs/jwt.js";


// export const register = (req, res) => {
//     const {user, password, email, nombre, apellido} = req.body
//     console.log(user, password, email, nombre, apellido)
//     // console.log(req.body)
//     insertUser()
    
//     // console.log(newUser)
//     res.send('registrando')
// }

export const register = async (req, res, next) => {
    try {
      const {user, password, nombre, apellido, email} = req.body
      if (user != "" && password != "" && nombre != "" && apellido != "" && email != "") {
        let passwordHash= await bcrybt.hash(password, 10)
        await insertUser({user, password:passwordHash, nombre, apellido, email});
        
       const token = await createAccessToken({user:user})
        
      res.cookie('token', token)
          res.json({
            message:"se creó el usuario"
          })
      } else {
        console.log('error')
      }
    } catch (error) {
      res.status(500).json({
        message:error.message
      })
    }
  };
    
export const login = async (req, res, next) => {

  try {
    var usuario = req.body.user;  
    var password = req.body.password;  

    var data = await getUsernameAndPassword(usuario);
      console.log(data)

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      bcrybt.compare(password, data.password, (err, resultado)=>{
        if(err) throw err;
        if(resultado){ 
          res.status(200).json(
            {
            message:"ok"
          }
        )
        }else{
          res.status(401).json({
            message:'Contraseña incorrecta'
          })
        }
      })
      console.log(data.id)

      const token = await createAccessToken({id:data.id})
      res.cookie('token', token)
          console.log('login')
    } else {
     res.send('error')
    }
  } catch (error) {
    console.log(error);
  }
  };

export const logout = function(req, res, next){
  req.session.destroy();
  res.cookie('token', "", {
    expires:new Date(0)
  })
      console.log('logout')
  res.send('has salido')
  };

export const profile = async function(req, res, next){
  const {id} = req.user.payload
  console.log(id)
  const usuario = await getUserById(id)

  if(!usuario) return res.status(400).json({message:'Usuario no encontrado'})
  // console.log()
  const {user, nombre, apellido, email} = usuario
  res.json({
    user,
    nombre,
    apellido,
    email
})
}





// export const usuarios = async () => {
  
// }


