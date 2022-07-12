/**
 * @name FormContainer
 * @todo react-hook-form
 */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { commentsAction } from "../features/comments/commentsSlice";

function Form({ onSubmit }) {
  // hooks
  const { register, handleSubmit, setValue } = useForm();
  // defaultValue
  // redux
  const dispatch = useDispatch();
  const { modify } = useSelector((state) => state.comments);
  // hooks

  // useEffect
  useEffect(() => {
    setValue("profile_url", modify.profile_url);
    setValue("author", modify.author);
    setValue("content", modify.content);
    setValue("createdAt", modify.createdAt);
  }, [modify]);
  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("profile_url")}
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
          {...register("author")}
        />
        <br />
        <textarea
          {...register("content")}
          name="content"
          placeholder="내용"
          required
        ></textarea>
        <br />
        <input
          type="text"
          {...register("createdAt")}
          name="createdAt"
          placeholder="2020-05-30"
          required
        />
        <br />
        <button type="submit">등록</button>
        {/* <div>{JSON.stringify(values, null, 1)}</div> */}
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
