import express, {Request, Response} from 'express'
const router = express.Router()


import {
  getProducts,
  getProductById,
//   deleteProduct,
//   createProduct,
//   updateProduct,
//   createProductReview,
//   getTopProducts,
} from '../controllers/productController.ts'
// import { protect, admin } from '../middleware/authMiddleware.js'

  
// router.get('/:id', (req: Request, res: Response)=>{
// const product = products.find((p)=>{p._id === parseInt(req.params.id)})
// res.json(product)
// })

router.route('/')
.get(getProducts)
// .post(protect, admin, createProduct)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

export default router
