let teste = {
  imageName: "AnyDesk.exe",
  pid: 11812,
  sessionName: "Console",
  sessionNumber: 1,
  memUsage: 39931904,
  status: "Running",
  username: "DCTECNO\\davi",
  cpuTime: 0,
  windowTitle: "AnyDesk"
};

let processName;

teste.imageName == ""
  ? (processName = "Menu Fantasma")
  : (processName = teste.imageName);

console.log(processName);
