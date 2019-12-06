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
  height: 400px;
  margin: 20px;
  object-fit: cover;
  border-radius: 8px;
`;
const StyledImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

/* Images Component  */
function Images(props: React.PropsWithChildren<ImagesProps>) {
  /* Images Variables */
  const [imageLink, setImageLink] = React.useState('');
  const { mutation: addImage } = useMutation(mutations.updateImageLinks, {
    variables: { wordId: props.wordId, imageLinks: [...props.images, imageLink] },
  });

  /* Images Callbacks */
  /* Images Lifecycle  */

  return (
    <div>
      <label>
        Resim Ekleme :
        <input onChange={e => setImageLink(e.target.value)} />
      </label>
      <button type="button" onClick={() => addImage()}>
        Ekle
      </button>
      <StyledImagesWrapper>
        {props.images.map(item => (
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
  );
}
const PureImages = React.memo(Images);

export { PureImages as Images };
