export interface IProps {
  text: string;
  onClickRemove: () => void;
  id: string;
  isCheck: () => void;
}
export interface ITodo {
  id: string;
  text: string;
  isCheck: boolean;
}
