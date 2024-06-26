import {Router} from 'express'
import { TraerPeliculas } from '../services/conexion.mjs'
const router= Router()

router.get('/',(req, res) => res.render('index',{title:'First Website with Node'}))

router.get('/catalogo',(req, res) => res.render('catalogo',{title:'Catalogo'}))

router.get('/contact',(req, res) => res.render('contact',{title:'Contact me'}))

router.get('/api/get-peliculas', async(req, res) => {
    const peliculas= await TraerPeliculas()
    res.status(200).json(peliculas)

})
export default router