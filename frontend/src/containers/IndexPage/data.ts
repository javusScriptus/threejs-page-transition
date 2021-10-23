import { GetStaticProps } from 'next';

import { getCards, Card } from 'utils/prismic/queries/getCards';
import { getLayout } from 'utils/prismic/queries/getLayout';

import { ISR_TIMEOUT } from 'utils/prismic/isrTimeout';

export interface Props {
  cardsCms: Card[];
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const cards = await getCards();
  const layout = await getLayout();

  return {
    props: {
      cardsCms: cards,
    },
    revalidate: ISR_TIMEOUT,
  };
};
