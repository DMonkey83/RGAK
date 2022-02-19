import { FC } from 'react';
import styled from 'styled-components';
import { ProductProps } from '../lib/types/ProductTypes';
import Product from './Product';

const ProductList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
`;

const Products:FC<ProductProps> = ({data}) => {
  const products = data && data.products;
  return <div>
    <ProductList>
      {products && products.map(product => {
        return <Product product={product} key={product.id} />;
      })}
    </ProductList>
  </div>;
};

export default Products;