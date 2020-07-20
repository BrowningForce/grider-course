import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// Components
import Comment from './components/Comment';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  const createComment = () => {
    return {
      avatar: faker.image.avatar(),
      author: faker.name.firstName(),
      date: faker.date.recent().toLocaleTimeString(),
      text: faker.lorem.sentence(),
    };
  };
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <Comment {...createComment()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment {...createComment()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment {...createComment()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment {...createComment()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment {...createComment()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
