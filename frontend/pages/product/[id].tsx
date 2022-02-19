import { useRouter } from 'next/router';
import { FC } from 'react';
import SingleProduct from '../../components/SingleProduct';

const SingleProductPage: FC = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log('pid', id);
  return (
    <SingleProduct id={id as string} />
  );
};

export default SingleProductPage;