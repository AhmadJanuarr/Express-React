// resolve = janji telah terpenuhi
// reject = janji tidak terpenuhi
// finally = waktu tunggu selesai, baik keadaan itu terpenuhi atau tidak

// aksi resolve = then
// aksi reject = catch

//define variable

let done = true;

//define a promise
const task = new Promise((resolve, reject) => {
  if (done) {
    resolve("task berhasil terselesaikan");
  } else {
    reject("task belum diselesaikan");
  }
});

console.log(task);
// run promise with action
task()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
