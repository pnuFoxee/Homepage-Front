import React from 'react';
import ChallengeCard from './ChallengeCard';

const Category = (props) => {
  const { category, categoryList } = props;

  return (
    <div className="m-5">
      <div className="mb-6">
        <div className="text-2xl dark:text-yellow-100">{category}</div>
      </div>
      <div className="flex flex-wrap justify-between">
        {categoryList.map((challenge, challengeIdx) => (
          <ChallengeCard
            key={challengeIdx}
            name={challenge.name}
            score={challenge.score}
            isSolved={challenge.isSolved}
          />
        ))}
      </div>
    </div>
  );
};
export default Category;
