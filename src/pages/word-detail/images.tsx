import * as React from 'react';
import { useMutation } from 'yasintz-api-calls';
import styled from '~/styled';
import { mutations } from '~/api';

/* Images Helpers */
interface ImagesProps {
  images: string[];
  wordId: string;
}

/* Images Constants */

/* Images Styles */

const StyledImage = styled.img`
  width: 400px;
  margin: 20px;
  object-fit: cover;
  border-radius: 8px;
`;
const StyledImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledWordImagesWrapper = styled.div`
  border: 1px solid black;
  padding: 12px;
`;

/* Images Component  */
function Images(props: React.PropsWithChildren<ImagesProps>) {
  /* Images Variables */
  const [imageLink, setImageLink] = React.useState('');
  const { mutation: addImage } = useMutation(mutations.addWordImageLink, {
    variables: { wordId: props.wordId, imageLink },
  });

  /* Images Callbacks */
  /* Images Lifecycle  */

  return (
    <StyledWordImagesWrapper>
      <label>
        Resim Ekleme :
        <input onChange={e => setImageLink(e.target.value)} value={imageLink} />
      </label>
      <button type="button" onClick={() => addImage().then(i => setImageLink(''))} disabled={!imageLink}>
        Ekle
      </button>
      <StyledImagesWrapper>
        {props.images.map(item => (
          <div key={item}>
            <StyledImage src={item} />
            <br />
            <a href={item} target="_blank" rel="noopener noreferrer">
              Ac
            </a>
          </div>
        ))}
      </StyledImagesWrapper>
    </StyledWordImagesWrapper>
  );
}
const PureImages = React.memo(Images);

export { PureImages as Images };
