import * as React from 'react';
import { NavLink, RouteComponentProps, Redirect } from 'react-router-dom';
import { useQuery, useMutation, refetchFactory } from 'yasintz-api-calls';
import styled, { colors } from '~/styled';
import { queries, mutations } from '~/api';
import { objectKeys } from '~/utils';
import { Container, UIButton } from '~/components/ui';

/* WordRegister Helpers */
interface WordRegisterProps {}

/* WordRegister Constants */

/* WordRegister Styles */
const StyledWordRegisterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(UIButton)``;

const StyledLi = styled.li``;

const StyledWordText = styled.span`
  margin: 0 16px;
`;

const StyledActionButton = styled.strong`
  color: ${colors.primaryDark};
  cursor: pointer;
  border-radius: 50%;
`;

/* WordRegister Component  */
function WordRegister(props: React.PropsWithChildren<RouteComponentProps<WordRegisterProps>>) {
  /* WordRegister Variables */
  const { data, loading, error } = useQuery(queries.getWords, { defaultValue: {} });
  const { data: allBrains, loading: allBrainsLoading } = useQuery(queries.getAllBrainIds, { defaultValue: [] });
  const { data: status, loading: isRegisteredTodayLoading } = useQuery(queries.isRegisteredToday);
  const [inputValue, setInputValue] = React.useState('');
  const [shownWordLenght, setShownWordLength] = React.useState(15);
  const [selectedWordIds, setSelectedWordIds] = React.useState<string[]>([]);
  const { mutation } = useMutation(mutations.registerWords, {
    variables: { wordIds: selectedWordIds },
    refetchQueries: [
      refetchFactory(queries.getBrainTodayBrainWords, { type: 'chain' }),
      refetchFactory(queries.isRegisteredToday, { type: 'chain', dataHandler: () => ({ registered: true }) }),
    ],
  });

  const words = React.useMemo(() => {
    if (inputValue) {
      return objectKeys(data)
        .map(item => data[item])
        .filter(({ text, id }) => text.includes(inputValue) && !selectedWordIds.includes(id) && !allBrains.includes(id))
        .slice(0, shownWordLenght);
    }

    return objectKeys(data)
      .map(item => data[item])
      .filter(({ id }) => !selectedWordIds.includes(id) && !allBrains.includes(id))
      .slice(0, shownWordLenght);
  }, [inputValue, data, shownWordLenght, selectedWordIds, allBrains]);
  /* WordRegister Callbacks */

  /* WordRegister Lifecycle  */
  if (loading || isRegisteredTodayLoading || allBrainsLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (status && status.registered) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <StyledWordRegisterWrapper>
        <div>
          <label>
            Ara : <input onChange={e => setInputValue(e.target.value)} />
          </label>
          <ul>
            <li>
              <strong>Words</strong>
            </li>
            {words.map(({ text, id }) => (
              <StyledLi key={id}>
                {selectedWordIds.length < 5 && (
                  <StyledActionButton onClick={() => setSelectedWordIds([...selectedWordIds, id])}>
                    +
                  </StyledActionButton>
                )}
                <StyledWordText>{text}</StyledWordText>
                <NavLink to={`detail/${id}`}>➙</NavLink>
              </StyledLi>
            ))}
          </ul>
          <StyledButton onClick={() => setShownWordLength(shownWordLenght + 15)}>Daha Fazla Goster</StyledButton>
        </div>
        <div>
          <ul>
            <li>
              <strong>Selected Words</strong>
            </li>
            {selectedWordIds.map(id => (
              <li key={`${id}_selected`}>
                <StyledActionButton onClick={() => setSelectedWordIds(selectedWordIds.filter(item => item !== id))}>
                  -
                </StyledActionButton>
                <StyledWordText>{data[id].text}</StyledWordText>
              </li>
            ))}
          </ul>
          {selectedWordIds.length === 5 && (
            <StyledButton
              onClick={() =>
                mutation().then(d => {
                  // props.history.push(`/`);
                  return d;
                })
              }
            >
              Kaydet
            </StyledButton>
          )}
        </div>
      </StyledWordRegisterWrapper>
    </Container>
  );
}
const PureWordRegister = React.memo(WordRegister);

export { PureWordRegister as WordRegister };
