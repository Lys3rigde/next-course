import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Paragraph, Tag, Rating, Input, TextArea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';
function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(1);

  return (
    <>
      <Htag tag='h1'>Кнопка</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button arrow='right' appearance='ghost'>Кнопка</Button>
      <Paragraph size='s'>Маленький</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size='l'>Большой</Paragraph>
      <Tag size='s'>Мал</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='primary'>Жопа Попа</Tag>
      <Tag size='s' color='green'>Пися попа</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='тест' />
      <TextArea placeholder='тест' />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
}