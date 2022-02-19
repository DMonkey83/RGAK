import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import React, { FC} from 'react';
import useForm from '../lib/hooks/useForm';
import { ALL_PRODUCTS_QUERY } from '../pages/products';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const initialState = {
  name: '',
  price: 0,
  description: '',
  image: ''
};

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Decimal!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: {
          create: {
            image: $image,
            altText: $name
          }
        }
      }
    ){
      id
      price
      description
    }
  }
`;

const CreateProduct: FC = () => {
  const {inputs, handleChange, clearForm, resetForm} = useForm(initialState);
  const [createProduct, {loading, error, data}] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{query: ALL_PRODUCTS_QUERY}]
  });
  console.log(createProduct);
  return (
    <Form onSubmit={async (event) => {
      event.preventDefault();
      const res = await createProduct({variables: inputs});
      console.log(res);
      clearForm();
      Router.push({
        pathname: `/pruduct/${res.data.createProduct.id}`
      });
    }}>
      <DisplayError error={error}/>
      <fieldset disabled={loading} aria-busy={loading} >
        <label htmlFor='image'>
          Image
          <input 
            required
            type='file' 
            id='image' 
            name='image' 
            onChange={handleChange}
            placeholder='image' />
        </label>
        <label htmlFor='name'>
          Name
          <input 
            required
            type='text' 
            id='name' 
            name='name' 
            value={inputs?.name as string} 
            onChange={handleChange}
            placeholder='name' />
        </label>
        <label htmlFor='price'>
          Price
          <input 
            required
            type='number' 
            id='price' 
            name='price' 
            value={inputs.price as string} 
            onChange={handleChange}
            placeholder='price' />
        </label>
        <label htmlFor='description'>
          Description
          <textarea 
            id='description' 
            required
            name='description' 
            value={inputs?.description as string} 
            onChange={handleChange}
            placeholder='description' />
        </label>
        <button type='submit'>+ Add Product</button>
        <button onClick={clearForm} type='button'>+ Add Product</button>
      </fieldset>
    </Form>
  );
};

export default CreateProduct;