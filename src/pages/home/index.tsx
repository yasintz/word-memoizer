import * as React from 'react';
import { Redirect } from 'react-router';
import { useQuery } from 'yasintz-api-calls';
import styled from '~/styled';
import { queries } from '~/api';
import { Grammars } from './grammers';
import { Words } from './words';

/* Home Helpers */
interface HomeProps {}

/* Home Style Constants */

/* Home Styles */

/* 
(5 kelime)
1(read). oku (incele resimlerine bak) gunun 3 farkli vatinde 5 er kez
3(write). yaz 3 farkli vatinde 1 er kez
5(listen). dinle  3 farkli vatinde 5 er kez
7(adverbs). zaman zarflarinda nasil bir hal aliyor incele
9(sentence-read). ornek cumle oku(15 tane) ve okudugun cumleleri yaz (5 tane)
11(sentence-write-past). gecmis ornek cumle kur ve yaz (3 tane)
13(sentence-write-present). simdiki ornek cumle kur ve yaz (3 tane)
15(sentence-write-future). gelecek ornek cumle kur ve yaz (3 tane)
30(remember-1). hatirlamak icin oku(2-3 kez)
45(remember-2). hatirlamak icin oku(2-3 kez)
90(remember-3). hatirlamak icin oku(2-3 kez)
*/

const HomeWrapper = styled.div``;

/* Home Component  */
function Home(props: React.PropsWithChildren<HomeProps>) {
  const { data: status, loading } = useQuery(queries.isRegisteredToday);

  if (loading) {
    return <div>Loading</div>;
  }
  if (!(status && status.registered)) {
    return <Redirect to="word-register" />;
  }

  return (
    <HomeWrapper>
      <Grammars />
      <Words />
    </HomeWrapper>
  );
}

const _Home = Home;

export { _Home as Home };
