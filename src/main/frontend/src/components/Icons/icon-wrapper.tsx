import { icons, listOfKeys } from '@/components/Icons';

type Props = {
  id: string;
  color?: CSSStyleValue;
  width?: CSSStyleValue;
};
export const IconWrapper = ({ id, color, width }: Props) => {
  if (!listOfKeys.includes(id)) return <></>;
  const Icon = icons[id];
  return <Icon sx={{ color, fontSize: width }} />;
};
