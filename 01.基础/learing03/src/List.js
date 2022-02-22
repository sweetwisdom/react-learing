// 这是第二种方法
function List() {
  const users = [
    { username: "Jerry", age: 21, gender: "male" },
    { username: "Tomy", age: 22, gender: "male" },
    { username: "Lily", age: 19, gender: "female" },
    { username: "Lucy", age: 20, gender: "female" },
  ];

  const userEl = function (user) {
    return (
      <div>
        <p>姓名：{user.username}</p>
        <p>年龄：{user.age}</p>
        <p>性别：{user.gender}</p>
        <hr></hr>
      </div>
    );
  };

  return <div>{users.map((user) => userEl(user))}</div>;
}

// function List() {
//   const users = [
//     { username: "Jerry", age: 21, gender: "male" },
//     { username: "Tomy", age: 22, gender: "male" },
//     { username: "Lily", age: 19, gender: "female" },
//     { username: "Lucy", age: 20, gender: "female" },
//   ];
//   const userEl = [];
//   for (const user of users) {
//     userEl.push(
//       <div>
//         <p>姓名：{user.username}</p>
//         <p>年龄：{user.age}</p>
//         <p>性别：{user.gender}</p>
//         <hr></hr>
//       </div>
//     );
//   }
//   return <div>{userEl}</div>;
// }
export default List;
