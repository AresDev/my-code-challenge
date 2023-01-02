import { FormEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {} from "react-router-dom";
import { createPost } from "../../../shared/api";

const BASE_URL = "https://us-central1-mbtcandidate.cloudfunctions.net";

interface FormProps {
  action: string;
}

const CreateForm = ({ action }: FormProps) => {
  let params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const url = `${BASE_URL}/posts/arestrepo`;

  if (action === "create") {
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && text) {
      const newId = params.id;
      if (newId) {
        const result = await createPost(url, {
          id: newId,
          title: title,
          text: text,
          timestamp: new Date().toLocaleString(),
        });
        if (result) {
          navigate("/posts");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">TITLE:</label>
        <input
          id="title"
          type="text"
          placeholder="post title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <label htmlFor="text">TEXT:</label>
        <textarea
          id="text"
          placeholder="post text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default CreateForm;
