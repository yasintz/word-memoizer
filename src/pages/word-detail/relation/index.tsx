import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'yasintz-api-calls';
import styled from '~/styled';
import { WordRelation } from '~/helpers';
import { queries } from '~/api';
import { WordAddRealation } from './add';

/* WordRelations Helpers */
interface WordRelationsProps {
  wordId: string;
  relations: WordRelation;
}

/* WordRelations Constants */

/* WordRelations Styles */
const StyledWordRelationsWrapper = styled.div`
  border: 1px solid black;
  padding: 12px;
  h5 {
    margin: 8px 0 0 0;
    color: green;
  }
`;

/* WordRelations Component  */
function WordRelations(props: React.PropsWithChildren<WordRelationsProps>) {
  /* WordRelations Variables */
  const { data } = useQuery(queries.getWordRelations, {
    variables: { relations: props.relations },
    defaultValue: { oppositeMeaningWordIds: [], synonymWordIds: [] },
  });
  const [isShownRelationAddComp, setIsShownRelationAddComp] = React.useState(false);
  /* WordRelations Callbacks */
  /* WordRelations Lifecycle  */

  return (
    <StyledWordRelationsWrapper>
      {!isShownRelationAddComp && (
        <button type="button" onClick={() => setIsShownRelationAddComp(true)}>
          Goster
        </button>
      )}
      {isShownRelationAddComp && <WordAddRealation wordId={props.wordId} />}
      {data.oppositeMeaningWordIds.length > 0 && (
        <div>
          <h5>Zit Anlamlilar</h5>
          <hr />
          <div>
            {data.oppositeMeaningWordIds.map(word => (
              <span key={word.text + word.text}>
                <NavLink to={`/detail/${word.id}`}>{word.text}</NavLink> <span> - </span>
              </span>
            ))}
          </div>
        </div>
      )}
      {data.synonymWordIds.length > 0 && (
        <div>
          <h5>Es Anlamlilar</h5>
          <hr />
          <div>
            {data.synonymWordIds.map(word => (
              <span key={word.text + word.text}>
                <NavLink to={`/detail/${word.id}`}>{word.text}</NavLink> <span> - </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </StyledWordRelationsWrapper>
  );
}
const PureWordRelations = React.memo(WordRelations);

export { PureWordRelations as WordRelations };
