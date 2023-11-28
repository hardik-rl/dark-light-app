import React, { useState } from "react";
import { getAllPost } from "./api";
import Actions from "./Actions";

const Post = () => {
  const [data, setData] = useState([]);

  const showAllPost = () => {
    getAllPost().then((response) => {
      setData(response);
    });
  };

  return (
    <div>
      <button
        className="p-3 bg-indigo-600 text-white rounded-lg text-sm mt-3"
        onClick={showAllPost}
      >
        Show All Post
      </button>
      <table className="post-table table-fixed my-10">
        <thead>
          {data.length !== 0 && <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Desciption</th>
            <th>UserId</th>
            <th>Actions</th>
          </tr>}
        </thead>
        <tbody>
          {data.length !== 0 &&
            data.data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>{item.userId}</td>
                <td>
                  <Actions />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Post;
