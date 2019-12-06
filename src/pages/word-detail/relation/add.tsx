import * as React from 'react';
import { useQuery, useMutation } from 'yasintz-api-calls';
import styled from '~/styled';
import { queries, mutations } from '~/api';

/* WordAddRealation Helpers */
interface WordAddRealationProps {
  wordId: string;
}

/* WordAddRealation Constants */

/* WordAddRealation Styles */
const StyledWordAddRealationWrapper = styled.div``;

/* WordAddRealation Component  */
function WordAddRealation(props: React.PropsWithChildren<WordAddRealationProps>) {
  /* WordAddRealation Variables */
  const { data: allWords, loading } = useQuery(queries.getWords);
  const [filterInputValue, setFilterInputValue] = React.useState('');
  const [relatedWordId, setRelatedWordId] = React.useState('');
  const [relatedWordType, setRelatedWordType] = React.useState('');
  const { mutation } = useMutation(mutations.addWordRelation, {
    variables: { wordId: props.wordId, relationWordId: relatedWordId, type: relatedWordType as any },
  });
  const allWordsArray = React.useMemo(
    () =>
      allWords
        ? Object.keys(allWords)
            .map(key => allWords[key])
            .filter(item => item.text.includes(filterInputValue))
        : [],
    [allWords, filterInputValue],
  );
  /* WordAddRealation Callbacks */

  /* WordAddRealation Lifecycle  */
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <StyledWordAddRealationWrapper>
      <input value={filterInputValue} onChange={e => setFilterInputValue(e.target.value)} />
      <select onChange={e => setRelatedWordId(e.target.value)}>
        {allWordsArray.map(item => (
          <option key={`${item.id}_option`} value={item.id}>
            {item.text}
          </option>
        ))}
      </select>
      <select onChange={e => setRelatedWordType(e.target.value)}>
        <option value="opposite">Zit</option>
        <option value="synonym">Es</option>
      </select>
      <button disabled={!relatedWordType || !relatedWordId} onClick={() => mutation()} type="button">
        Ekle
      </button>
    </StyledWordAddRealationWrapper>
  );
}
const PureWordAddRealation = React.memo(WordAddRealation);

export { PureWordAddRealation as WordAddRealation };
