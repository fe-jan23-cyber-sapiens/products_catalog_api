'use strict';

const getNewId = (resourses) => {
  const newId = Math.max(...resourses.map(resourse => resourse.id), 0) + 1;

  return newId;
};

module.exports = {
  getNewId,
};
