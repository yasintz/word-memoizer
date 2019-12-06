import * as React from 'react';
import { useMutation } from 'yasintz-api-calls';
import styled from '~/styled';
import { WordLink } from '~/helpers';
import { useObjectState } from '~/utils/hooks';
import { mutations } from '~/api';

/* WordLinks Helpers */
interface WordLinksProps {
  links: WordLink[];
  wordId: string;
}

/* WordLinks Constants */

/* WordLinks Styles */
const StyledWordLinksWrapper = styled.div`
  border: 1px solid black;
  padding: 12px;
`;

/* WordLinks Component  */
function WordLinks(props: React.PropsWithChildren<WordLinksProps>) {
  /* WordLinks Variables */
  const [state, setState] = useObjectState({ link: '', title: '' });
  const { mutation } = useMutation(mutations.addWordLink, {
    variables: { wordId: props.wordId, link: state },
  });

  /* WordLinks Callbacks */

  /* WordLinks Lifecycle  */

  return (
    <StyledWordLinksWrapper>
      <div>
        <label>
          Link Ekleme :
          <input onChange={e => setState({ title: e.target.value })} value={state.title} placeholder="Title" />
          <input onChange={e => setState({ link: e.target.value })} value={state.link} placeholder="Link" />
        </label>
        <button
          type="button"
          onClick={() => mutation().then(i => setState({ link: '', title: '' }))}
          disabled={!state.link || !state.title}
        >
          Ekle
        </button>
      </div>
      {props.links.map(item => (
        <span key={item.link}>
          <a href={item.link} key={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
          <span> - </span>
        </span>
      ))}
    </StyledWordLinksWrapper>
  );
}
const PureWordLinks = React.memo(WordLinks);

export { PureWordLinks as WordLinks };
