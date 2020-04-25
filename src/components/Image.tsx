import styled from 'styled-components';

type Props = {
  src: string;
};

const Image = ({ src }: Props) => {
  return <Container src={src} />;
};

const Container = styled.img`
  max-width: 60rem;
  height: 30rem;
  margin: 2px;
`;

export default Image;
