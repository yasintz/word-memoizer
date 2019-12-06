import * as React from 'react';
import lodash from 'lodash';
import { useQuery } from 'yasintz-api-calls';
import { RouteComponentProps } from 'react-router-dom';
import styled from '~/styled';
import { queries } from '~/api';
import { Container } from '~/components/ui';
import { Images } from './images';

/* WordDetail Helpers */
interface WordDetailParams {
  id: string;
}

/* WordDetail Constants */

/* WordDetail Styles */
const StyledWordDetailWrapper = styled.div``;

/* WordDetail Component  */
function WordDetail(props: React.PropsWithChildren<RouteComponentProps<WordDetailParams>>) {
  const { data: currentWord, loading: allWordsLoading } = useQuery(queries.getWord, {
    variables: { id: props.match.params.id },
  });
  const imageLinks = React.useMemo(() => {
    return lodash.get(currentWord, 'detail.images', []);
  }, [currentWord]);

  if (allWordsLoading) {
    return <div>Loading</div>;
  }
  if (!currentWord) {
    return <div>Word not found</div>;
  }

  return (
    <Container>
      <StyledWordDetailWrapper>
        <h1>{currentWord.text}</h1>
        <hr />
        <Images images={imageLinks} wordId={props.match.params.id} />
      </StyledWordDetailWrapper>
    </Container>
  );
}
const PureWordDetail = React.memo(WordDetail);

export { PureWordDetail as WordDetail };
