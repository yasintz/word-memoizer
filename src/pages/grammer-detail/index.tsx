import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from 'yasintz-api-calls';
import styled, { colors } from '~/styled';
import { queries } from '~/api';

/* GrammerDetail Helpers */
interface GrammerDetailParams {
  id: string;
}

/* GrammerDetail Constants */

/* GrammerDetail Styles */
const StyledGrammerDetailWrapper = styled.div`
  background-color: ${colors.white};
`;

/* GrammerDetail Component  */
function GrammerDetail(props: React.PropsWithChildren<RouteComponentProps<GrammerDetailParams>>) {
  const { data, loading } = useQuery(queries.getGrammerById, { variables: { id: props.match.params.id } });

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <StyledGrammerDetailWrapper>
      <div>video Number : {data.videoNumber}</div>
    </StyledGrammerDetailWrapper>
  );
}
const PureGrammerDetail = React.memo(GrammerDetail);

export { PureGrammerDetail as GrammerDetail };
