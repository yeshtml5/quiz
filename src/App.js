import React from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";

import styled from "styled-components";
import { useSelector } from "react-redux";
function App() {
  // store
  const { total } = useSelector((state) => state.comments);
  return (
    <div>
      {/* 기능추가 */}
      <Header>총 갯수 : {total}개</Header>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </div>
  );
}

export default App;

const Header = styled.div`
  padding: 10px 20px;
  color: #ffffff;
  background-color: #111;
`;
