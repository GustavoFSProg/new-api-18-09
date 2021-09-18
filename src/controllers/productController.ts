import { Request, Response } from 'express'
import productsModel from '../models/productsModel'
const { promisify } = require('util')
import fs from 'fs'
const unlink = promisify(fs.unlink)

async function register(req: Request, res: Response) {
  try {
    const { filename: image }: any = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await productsModel.create({
      title: req.body.title,
      price: req.body.price,
      image: filename,
    })

    return res.status(201).send({ message: 'Registered with Success!!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Cagada', error })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await productsModel.find({}, 'title price image')

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'ERRO' })
  }
}

async function update(req: Request, res: Response) {
  try {
    await productsModel.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
      },
    })

    res.status(200).send({ msg: 'Atualizado' })
  } catch (error) {
    res.status(400).send({ msg: 'Erro' })
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    await productsModel.findByIdAndRemove(req.params.id)

    res.status(200).send({ msg: 'Deletado!' })
  } catch (error) {
    res.status(400).send({ msg: 'ERRO' })
  }
}

export default { register, getAll, update, deleteOne }
