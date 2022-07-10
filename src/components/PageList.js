import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { commentsAction } from "../features/comments/commentsSlice";

function PageList() {
  const dispatch = useDispatch();
  const { page, page_total } = useSelector((state) => state.comments);
  const pageArray = new Array(page_total).fill(0);

  useEffect(() => {}, []);

  return (
    <PageListStyle>
      {pageArray.map((list, index) => {
        return (
          <Page
            active={index === page}
            key={index}
            onClick={() => {
              // 페이지활성화
              // dispatch(commentsAction.setPage(index));
              dispatch(commentsAction.getComments(index));
            }}
          >
            {index + 1}
          </Page>
        );
      })}
    </PageListStyle>
  );
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;
