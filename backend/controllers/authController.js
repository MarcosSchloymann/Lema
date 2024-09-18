import { getUserById, insertUser} from "./../models/usuariosModels.js"
import {getUsernameAndPassword} from "./../models/usuariosModels.js"
import bcrybt, { compare } from 'bcrypt'
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";


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
          res.json(
            ["se creó el usuario"]
          )
      } else {
        console.log('error')
      }
    } catch (error) {
      res.status(500).json([
        error.message
      ])
    }
  };
    
export const login = async (req, res, next) => {

  try {
    const usuario = req.body.user;  
    const password = req.body.password;  

    var data = await getUsernameAndPassword(usuario);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      bcrybt.compare(password, data.password, (err, resultado)=>{
        if(err) throw err;
        if(resultado){ 
          res.status(200).json({
            email:data.email,
            user:data.user,
            id:data.id
          }
        )
        }else{
          res.status(401).json(
            ['Contraseña incorrecta']
          )
        }
      })
      // console.log(data.id)

      const token = await createAccessToken({id:data.id})
      res.cookie('token', token)
          // console.log('login')
    } else {
    //  res.send('El usuario no existe')
     res.status(401).json(
      ['El usuario no existe']
    )
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

// export const verifyToken = async (req, res) => {
//   const {token} = req.cookies

//   if(!token) return res.status(401).json({message:"No autorizado"})
//   jwt.verify(token, TOKEN_SECRET, async (err, user)=> {
//     if(err) return res.status(401).json({
//       message:"No autorizado"
//     })
//     const userFound = await getUserById({id:id})
//     if(!userFound) return res.status(401).json({
//       message:"No autorizado"
//     })
//     return res.json({
//       id:userFound.id
//     })
//   })
// }





// export const usuarios = async () => {
  
// }


