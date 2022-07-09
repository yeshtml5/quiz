import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../features/comments/commentsSlice";

// 임시 데이터 입니다. 코드 작성시 data 부분을 지워주세요
// const data = [
//   {
//     id: 1,
//     profile_url: "https://picsum.photos/id/1/50/50",
//     author: "abc_1",
//     content: "UI 테스트는 어떻게 진행하나요",
//     createdAt: "2020-05-01",
//   },
// ];

function CommentList() {
  // const
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return comments.map((list, index) => (
    <Comment key={index}>
      <img src={list.profile_url} alt="" />
      {list.author}
      <CreatedAt>{list.createdAt}</CreatedAt>
      <Content>{list.content}</Content>
      <Button>
        <a
          onClick={() => {
            alert("수정" + index);
          }}
        >
          수정
        </a>
        <a
          onClick={() => {
            alert("삭제" + index);
          }}
        >
          삭제
        </a>
      </Button>
      <hr />
    </Comment>
  ));

  // return data.map((comment, key) => (
  //   <Comment key={key}>
  //     <img src={comment.profile_url} alt="" />
  //     {comment.author}
  //     <CreatedAt>{comment.createdAt}</CreatedAt>
  //     <Content>{comment.content}</Content>
  //     <Button>
  //       <a>수정</a>
  //       <a>삭제</a>
  //     </Button>
  //     <hr />
  //   </Comment>
  // ));
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
