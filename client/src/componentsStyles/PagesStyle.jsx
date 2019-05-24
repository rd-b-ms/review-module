import styled from 'styled-components';

const PageButton = styled.button`
  display: inline-block;
  background-color: transparent;
  color: rgb(0, 132, 137);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  font: inherit inherit inherit inherit inherit inherit inherit inherit inherit;
  text-decoration: none;
`;

const ArrowButtons = styled.div`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  box-shadow: rgb(0, 132, 137) 0px 0px 0px 1px inset;
  color: rgb(0, 132, 137);
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
  border-radius: 50%;
`;

const NumberInButton = styled.div`
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 16px;
`;
const SelectedButton = styled.button`
  display: inline-block;
  background-color: transparent;
  color: rgb(255, 255, 255);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  font: inherit inherit inherit inherit inherit inherit inherit inherit inherit;
  text-decoration: none;
`;

const SelectDiv = styled.div`
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background-color: #008489;
  color: white;
  border-radius: 16px;
`;
const PageButtonList = styled.li`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  line-height: 10px;
  margin-left: 0px;
`;

const PageButtonUL = styled.ul`
  margin-bottom: 35px;
  max-width: 696px;
  margin-left: 10px;
`;

const styles = {
  PageButton,
  ArrowButtons,
  NumberInButton,
  SelectedButton,
  SelectDiv,
  PageButtonList,
  PageButtonUL,
};
export default styles;
