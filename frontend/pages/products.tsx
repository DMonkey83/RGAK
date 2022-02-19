import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Products from '../components/Products';
import { IProductsData } from '../lib/types/ProductTypes';

export const ALL_PRODUCTS_QUERY  = gql`
    query ALL_PRODUCTS {
        products {
            id,
            name,
            price,
            description,
            photo {
            id,
            image {
                publicUrlTransformed
            }
            }
        }
    }
`;

export default function ProductsPage() {
  const {data, error, loading} = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return <div>
    <Products data={data as IProductsData}/>
  </div>;
}