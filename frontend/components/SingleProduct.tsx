import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import React, { FC } from 'react';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const PRODUCT_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        product(where:{id: $id}){
            id
            name
            description
            price
            photo {
                altText
                image {
                    filename
                    publicUrlTransformed
                }
            }
        }
    }
`;

interface SingleProductProps {
    id: string
}

const ProductStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    max-width: var(--maxWidth);
    align-items: center;
    gap: 2rem;
    img {
        width: 100%;
        object-fit: contain;
    }
`;

const SingleProduct:FC<SingleProductProps> = ({id}) => {
  const {loading, data, error, refetch} = useQuery(PRODUCT_QUERY, {
    variables: {
      id
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error}/>;
  const {product} = data; 
  console.log('data', product);
  return <ProductStyles>
    <Head>
      <title>Sick Fits | {product.name}</title>
    </Head>
    <img src={product.photo.image.publicUrlTransformed} alt={product.photo.altText} />
    <div className="details">
      <h2>
        {product.name}
      </h2>
      <p>{product.description}</p>
    </div>
  </ProductStyles>;
};


export default SingleProduct;