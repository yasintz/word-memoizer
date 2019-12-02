import * as React from 'react';
import lodash from 'lodash';
import { useQuery, useMutation } from 'yasintz-api-calls';
import { RouteComponentProps } from 'react-router-dom';
import styled from '~/styled';
import { queries, mutations } from '~/api';
import { Container } from '~/components/ui';

/* WordDetail Helpers */
interface WordDetailParams {
  id: string;
}

/* WordDetail Constants */

/* WordDetail Styles */
const StyledWordDetailWrapper = styled.div``;

const StyledImage = styled.img`
  width: 400px;
  height: 400px;
  margin: 20px;
  object-fit: cover;
  border-radius: 8px;
`;
const StyledImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
/* WordDetail Component  */
function WordDetail(props: React.PropsWithChildren<RouteComponentProps<WordDetailParams>>) {
  const { data: allWords, loading: allWordsLoading } = useQuery(queries.getWords, { defaultValue: {} });
  const { mutation: addImage } = useMutation(mutations.updateImageLinks);
  const currentWord = React.useMemo(() => allWords[props.match.params.id], [allWords, props.match.params.id]);
  const [imageLink, setImageLink] = React.useState('');

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
        <div>
          <div>
            <label>
              Resim Ekleme :
              <input onChange={e => setImageLink(e.target.value)} />
            </label>
            <button
              type="button"
              onClick={() => addImage({ wordId: props.match.params.id, imageLinks: [...imageLinks, imageLink] })}
            >
              Ekle
            </button>
          </div>
        </div>
        <div>
          <StyledImagesWrapper>
            {imageLinks.map(item => (
              <div>
                <StyledImage src={item} key={item} />
                <br />
                <a href={item} target="_blank" rel="noopener noreferrer">
                  Ac
                </a>
              </div>
            ))}
          </StyledImagesWrapper>
        </div>
      </StyledWordDetailWrapper>
    </Container>
  );
}
const PureWordDetail = React.memo(WordDetail);

export { PureWordDetail as WordDetail };
