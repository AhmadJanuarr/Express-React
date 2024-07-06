//define a promise with 3 seconds
const TaskPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 3000);
  });
};

//define function "task" with async and await
//bisa menggunakn function atau arrow function expresions
async function task() {
  try {
    const done = await TaskPromise();
    console.log(done);
  } catch (error) {
    console.log(error);
  }
}

console.log("mulai");
task();
console.log("selesai");
