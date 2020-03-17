const fs = require("fs");
const tasklist = require("tasklist");
const taskkill = require("taskkill");

const file = "logTaskKill.txt";
const process = "pcinf";

const getTasklist = async () => {
  console.log("Geting tasks ...");
  const tasks = await tasklist({ verbose: true });
  console.log("Done!");

  tasks.forEach(task => {
    if (task.memUsage < 10000000) {
      if (
        task.imageName == "" ||
        task.imageName.toLowerCase().includes(process)
      ) {
        killTask(task);
      }
    }
  });
};

const killTask = async task => {
  console.log(task);
  await taskkill([task.pid], { force: true });
  await createLog(task);
  console.log(`Task of PID ${task.pid} killed`);
};

const createLog = async task => {
  let processName = "";
  task.imageName == ""
    ? (processName = "Menu Fantasma")
    : (processName = task.imageName);

  let today = new Date();

  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  let string = `${date} - ${time} --> Process: ${processName} - memUsage: ${(
    task.memUsage * Math.pow(10, -6)
  ).toFixed(2)} MB - cpuTime: ${task.cpuTime} - userName: ${task.username}\r\n`;

  await fs.writeFile(file, string, { flag: "a" }, function(err) {
    if (err) return console.log(err);
    console.log("Log Atualizado");
  });
};

getTasklist();
