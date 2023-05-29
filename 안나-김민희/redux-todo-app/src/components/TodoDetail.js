import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { remove, updateMemo } from "../redux/todoSlice";
import { useNavigate, useParams } from "react-router-dom";

const TodoDetail = () => {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todo.find((item) => item.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [memo, setMemo] = useState("");

  if (!todo) {
    return <div>No todo selected</div>;
  }

  const { text, date, memo: todoMemo } = todo;

  const handleRemove = () => {
    dispatch(remove(todo.id));
    navigate("../");
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleMemoUpdate = () => {
    dispatch(updateMemo({ id: todo.id, memo }));
  };

  return (
    <div>
      <Item>
        <div>
          {text} - {date}
        </div>
        <button type="button" onClick={handleRemove}>
          X
        </button>
      </Item>
      <MemoTextarea value={memo} onChange={handleMemoChange} />
      <button type="button" onClick={handleMemoUpdate}>
        Save Memo
      </button>
      {todoMemo && <div>Previous Memo: {todoMemo}</div>}
      <button
        onClick={() => {
          navigate("../");
        }}
      >
        Home으로 이동
      </button>
    </div>
  );
};

export default TodoDetail;

const Item = styled.li`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const MemoTextarea = styled.textarea`
  width: 300px;
  height: 100px;
  margin-top: 20px;
`;
