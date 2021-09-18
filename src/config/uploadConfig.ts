import multer from 'multer'
import path from 'path'

const uploadConfig = {
  // eslint-disable-next-line new-cap
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(_req, file, cb) {
      const [name] = file.originalname.split('.')
      const filename = `${name}.jpg`
      cb(null, filename)
    },
  }),
}

export default uploadConfig
