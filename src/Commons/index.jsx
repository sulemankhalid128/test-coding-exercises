import { Link } from "react-router-dom";

const { default: styled } = require("styled-components");

export const Container = styled.div`
  font-size: 1em;
  text-align: center;
  color: black;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
`;
export const ContainerFluid = styled.div`
  width: 35rem;
  background: #fcf2df;
  border-radius: 10px;
  padding: 40px;
`;

export const Heading = styled.h1`
  background: #f8eace;
  padding: 10px;
  border-radius: 10px;
  text-align: left;
`;
export const Card = styled.div`
  color: black;
  display: flex;
  justify-content: start;
  margin: 20px 0px;
  padding: 1em;
  border-radius: 10px;
  background: #f8eace;
  box-shadow: 1px 3px #888888;
  font-weight: 500;
  border: 0;
  border-left: 5px solid #f8eace;

  &:hover {
    border-left: 5px solid #d5a139;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  border: 1px solid #9d9696;
  padding: 5px 25px;
  border-radius: 10px;
  color: black;
`;
export const Box = styled.div`
  width: 20px;
  margin-right: 25px;
  margin-top: 3px;
`;

export const Icon = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
`;

export const Empty = styled.div`
  font-weight: 600;
  width: auto;
  height: 50px;
  text-align: center;
  margin: 40px 0px;
  font-size: 22px;
`;
export const Label = styled.label`
  font-weight: 600;
  width: 100%;
  height: 50px;
  text-align: center;
  margin: 40px 0px;
  font-size: 16px;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  margin: 15px 0px;
  height: 35px;
  border: 0;
  background: radial-gradient(#fcf2df, transparent);
  border-bottom: 1px solid;
  outline: none;
`;

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  padding: 10px 3rem;
  border: 0;
  background: #f3d498;
  border-radius: 10px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
`;
