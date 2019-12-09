import * as React from 'react';
import { useQuery } from 'yasintz-api-calls';
import { NavLink } from 'react-router-dom';
import styled from '~/styled';
import { queries } from '~/api';

/* Home Helpers */
interface WordsProps {}

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

const StyledLi = styled.li``;

const StyledWordText = styled.span`
  margin: 0 16px;
`;

export function Words(props: React.PropsWithChildren<WordsProps>) {
  const { data: brains, loading: brainsLoading } = useQuery(queries.getTodayBrains, { defaultValue: [] });
  const { data: sections, loading: sectionsLoading } = useQuery(queries.getTodayWords, {
    variables: { brains },
    skip: brainsLoading,
    defaultValue: [],
  });
  if (brainsLoading || sectionsLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      {sections.map(({ words, title }) => (
        <div key={title}>
          <h3>{title}</h3>
          <hr />
          <ul>
            {words.map(item => (
              <StyledLi key={item.id}>
                <StyledWordText>{item.text}</StyledWordText>
                <NavLink to={`/word/${item.id}`}>➙</NavLink>
              </StyledLi>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
