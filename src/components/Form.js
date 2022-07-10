import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { commentsAction } from "../features/comments/commentsSlice";

function Form() {
  // redux
  const dispatch = useDispatch();
  // hooks
  const [values, setValues] = useState({
    author: "",
    createdAt: "",
    profile_url: "https://picsum.photos/id/1/50/50",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <FormStyle>
      <form>
        <input
          value={values.profile_url}
          onChange={handleChange}
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={values.author}
          onChange={handleChange}
        />
        <br />
        <textarea
          value={values.content}
          onChange={handleChange}
          name="content"
          placeholder="내용"
          required
        ></textarea>
        <br />
        <input
          type="text"
          value={values.createdAt}
          onChange={handleChange}
          name="createdAt"
          placeholder="2020-05-30"
          required
        />
        <br />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            dispatch(commentsAction.addComments(values));
            dispatch(commentsAction.getAllComments());
            dispatch(commentsAction.getComments());
            // setValues 초기화
            setValues({
              author: "",
              createdAt: "",
              profile_url: "https://picsum.photos/id/1/50/50",
              content: "",
            });
          }}
        >
          등록
        </button>
        <div>{JSON.stringify(values, null, 1)}</div>
      </form>
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
