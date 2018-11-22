module.exports = () => {
  const { posts } = require('../db/db.json');
  console.log('-----------------222-------------------');
  console.log(posts);
  // 深拷贝
  return JSON.parse(JSON.stringify(posts));
};
