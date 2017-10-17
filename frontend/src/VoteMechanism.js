import React from 'react';
import { connect } from 'react-redux'
import { updateNewPostScore } from './actions'

function VoteMechanism(props) {

  function handleClick(e, score) {
    e.preventDefault();
    if (props.type === 'post') {
      props.updateNewPostScore(props.id, score)
    } else {
      console.log('comment')
      console.log(score)
    }
  }

  return (
    <div className="vote-mechanism">
      <button onClick={e => handleClick(e, 'upVote')}>Up</button>
      <button onClick={e => handleClick(e, 'downVote')}>Down</button>
    </div>
  );
}

const mapDispatchToProps = {
  updateNewPostScore
}

export default connect(null, mapDispatchToProps)(VoteMechanism);
