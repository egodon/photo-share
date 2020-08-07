import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const H2 = styled.h2<SpaceProps>`
  ${space}
  font-size: ${(props) => props.theme.fontSize.__fs_xlarge};
`;

export default H2;
