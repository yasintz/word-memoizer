import * as React from 'react';
import { useQuery } from 'yasintz-api-calls';
import { NavLink } from 'react-router-dom';
import styled from '~/styled';
import { queries } from '~/api';
import { grammerByDateArrayParser } from '~/api/queries/data-parser';
import { GRAMMER_DAY_TYPE_TITLE_MAP } from '~/utils/constants';

/* Grammers Helpers */
interface GrammersProps {}

/* Grammers Constants */

/* Grammers Styles */
const StyledGrammersWrapper = styled.div``;

/* Grammers Component  */
function Grammars(props: React.PropsWithChildren<GrammersProps>) {
  const { data, loading } = useQuery(queries.getTodayGrammarsByDate, { defaultValue: [] });
  const parsedData = React.useMemo(() => grammerByDateArrayParser(data), [data]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <StyledGrammersWrapper>
      {Object.keys(parsedData).map(key => (
        <NavLink to={`/grammer/${parsedData[key]}`} key={parsedData[key]}>
          {GRAMMER_DAY_TYPE_TITLE_MAP[key]}
        </NavLink>
      ))}
    </StyledGrammersWrapper>
  );
}
const PureGrammars = React.memo(Grammars);

export { PureGrammars as Grammars };
