import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { commentsAction } from "../features/comments/commentsSlice";

function CommentList() {
  // const
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(commentsAction.getComments());
    dispatch(commentsAction.getAllComments());
  }, [dispatch]);
  return (
    <div>
      {/* <div>{JSON.stringify(comments, null, 1)}</div> */}
      <section>
        {comments.map((list, index) => {
          return (
            <Comment key={index}>
              <img src={list.profile_url} alt="" />
              {list.author}
              <CreatedAt>{list.createdAt}</CreatedAt>
              <Content>{list.content}</Content>
              <Button>
                <a>수정</a>
                <a>삭제</a>
              </Button>
              <hr />
            </Comment>
          );
        })}
      </section>
    </div>
  );
}

export default CommentList;
const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
