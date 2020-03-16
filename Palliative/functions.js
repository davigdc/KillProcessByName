fs = require("fs");
const tasklist = require("tasklist");
const taskkill = require("taskkill");

const file = "logTaskKill.txt";
const process = "pcinf";

module.exports = {
  async killTask(task, boolean) {
    console.log(task);
    if (boolean) await taskkill([task.pid], { force: true });
  },

  createLog(string) {
    fs.writeFile(file, `${string}\n`, { flag: "a" }, function(err) {
      if (err) return console.log(err);
      console.log("Hello World > helloworld.txt");
    });
  },

  tasksPerUser(tasks) {
    let users = {};
    tasks.forEach(task => {
      if (users[task.username]) {
        users[task.username].push(task);
      } else {
        users[task.username] = [];
        users[task.username].push(task);
      }
    });

    //console.log(users);
    return users;
  },

  selectTasks(tasks) {
    let selectedTasks = [];
    console.log(tasks);

    // tasks.forEach(task => {
    //   if (task.memUsage < 10000000) {
    //     if (
    //       task.imageName == "" ||
    //       task.imageName.toLowerCase().includes(process)
    //     ) {
    //       selectedTasks.push(task);
    //     }
    //   }
    // });

    return selectedTasks;
  }
};
