/**
 * @name FormContainer
 * @todo react-hook-form
 */
import React from "react";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { commentsAction } from "../features/comments/commentsSlice";

function FormContainer() {
  // redux
  const dispatch = useDispatch();
  const { modify } = useSelector((state) => state.comments);

  // onReset

  // onSubmit
  const onSubmit = (data) => {
    const isModify = modify?.id;
    if (!!isModify) {
      //-----수정모드
      dispatch(
        commentsAction.putComments(Object.assign(data, { id: modify?.id }))
      );
    } else {
      //*----------- 등록
      // 강제지연
      dispatch(commentsAction.addComments(data));
      // setTimeout(() => {
      //   dispatch(commentsAction.addComments(data));
      // }, 2000);
    }
    // modify 초기화
    dispatch(commentsAction.setModify({}));
  };

  return <Form onSubmit={onSubmit} />;
}

export default FormContainer;
