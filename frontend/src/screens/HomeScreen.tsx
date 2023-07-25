import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
// import Meta from '../components/Meta'
import { listProducts } from "../actions/productActions";
import { useAppSelector, useAppDispatch } from "../hooks";

// import products from "../products";
import IProduct from "../Interfaces/product";

const HomeScreen = () =>
  {
      const {keyword} = useParams()

      const {pageNumber} = useParams() || 1

    const dispatch = useAppDispatch();

    const productList: any = useAppSelector((state) => state.productList);
    const { loading, error, products, page, pages }: {loading: any; error: any; products: any; page: number; pages: number} = productList;

      useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
      }, [dispatch, keyword, pageNumber])      

    return (
      <React.Fragment>
        {/* <Meta /> */}
        {!keyword ? (
         <ProductCarousel /> 
         ) : ( 
         <Link to='/' className='btn btn-light'>
         Go Back 
         </Link> 
         )} 
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <React.Fragment>
            <Row>
              {products.map((product: any) => {
                return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              })}
            </Row>
            <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

export default HomeScreen;
