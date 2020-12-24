import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

// creacion de la consulta
const CREATE_MESSAGE = gql`
  # definición de la mutación
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    # ejecución de la mutación
    createMessage(title: $title, content: $content, author: $author) {
      _id
    }
  }
`;

const MessageForm = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // instaciamos la mutación que vamos a utilizar
  const [createMessage] = useMutation(CREATE_MESSAGE);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="car-body">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                // ejecutamos la mutación con los params del form
                await createMessage({
                  variables: { title, author, content },
                });
                setAuthor("");
                setTitle("");
                setContent("");
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  className="form-control"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="3"
                  placeholder="Content..."
                  className="form-control"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                ></textarea>
              </div>

              <button className="btn btn-success btn-block ">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
