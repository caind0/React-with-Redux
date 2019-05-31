import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to do this?</ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:30PM"
          text="hello"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Cain"
          timeAgo="Today at 6:30PM"
          text="My name is"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Tim"
        timeAgo="Today at 6:30PM"
        text="dfasfas"
        avatar={faker.image.avatar()}
      />
      <ApprovalCard>
        <CommentDetail
          author="Jim"
          timeAgo="Today at 6:30PM"
          text="fdsafas"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Bob"
          timeAgo="Today at 6:30PM"
          text="fdasfdsa"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
