import Router from 'express'
import productController from './controllers/productController'

const routes = Router()

import uploadConfig from './config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

routes.get('/', productController.getAll)
routes.post('/register', upload.single('image'), productController.register)
routes.put('/update/:id', productController.update)
routes.delete('/delete/:id', productController.deleteOne)

export default routes
