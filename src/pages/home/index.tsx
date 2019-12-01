import * as React from 'react';
import { useQuery } from 'yasintz-api-calls';
import styled, { css } from '~/styled';
import { Container } from '~/components/ui';
import { queries } from '~/api';

/* Home Helpers */
interface HomeProps {}

/* Home Style Constants */

/* Home Styles */

const HomeWrapper = styled.div``;
const a = css`
  color: red;
`;

/* Home Component  */
function Home(props: React.PropsWithChildren<HomeProps>) {
  const { data } = useQuery(queries.getWords);
  console.log(data);

  return (
    <Container>
      <HomeWrapper className={a}>Hello</HomeWrapper>
    </Container>
  );
}

const _Home = Home;

export { _Home as Home };
