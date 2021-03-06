import Link from 'next/link';
import { FC } from 'react';
import formatMoney from '../lib/formatMoney';
import { IProduct } from '../lib/types/ProductTypes';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';

interface ProductProps {
    product: IProduct;
}

const Product: FC<ProductProps> = ({product}) => {
  return <ItemStyles>
    <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
    <Title>
      <Link href={`/product/${product.id}`}>{product.name}</Link>
    </Title>
    <PriceTag>{formatMoney(parseFloat(product.price))}</PriceTag>
    <p>{product.description}</p>
  </ItemStyles>;
};

export default Product;