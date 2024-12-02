import * as SC from './GridBox.styled';

type IProps = {
  children: React.ReactNode
}

export function GridBox({ children }: IProps) {
  return <SC.Container>{children}</SC.Container>;
}