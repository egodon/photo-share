import styled from 'styled-components';
import Img from 'react-cool-img';
import { transformImage } from '@/utils/transformImage';

type Props = {
  src: string;
  cursor?: 'pointer' | 'grap';
};

/**
 *
 * @param cursor - change cursor when hovering
 *
 * @todo: Optimize for mobile
 */
const Image = ({ src, cursor }: Props) => {
  const transformedSrc = transformImage(src, { height: 600 });
  const placeholderImage = transformImage(src, {
    blur: 900,
    height: 600,
    quality: 'low',
  });

  return (
    <Container placeholder={placeholderImage} src={transformedSrc} cursor={cursor} />
  );
};

const Container = styled(Img)<{ cursor: Props['cursor'] }>`
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  min-height: 100%;
  object-fit: cover;
  vertical-align: bottom;
  max-width: 45rem;
  cursor: ${(props) => props.cursor ?? 'default'};
`;

export default Image;
