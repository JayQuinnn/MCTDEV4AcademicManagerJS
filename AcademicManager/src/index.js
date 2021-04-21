const { app, BrowserWindow, ipcMain, shell, Menu } = require('electron');
const path = require('path');
const os = require("os");
const fs = require("fs");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1800,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  let workerWindow = new BrowserWindow();
  workerWindow.loadURL("file://" + __dirname + "/worker.html");
  // workerWindow.hide();
  workerWindow.webContents.openDevTools();
  workerWindow.on("closed", () => {
    workerWindow = undefined;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("printPDF", (event, content) => {
  console.log(content);
  workerWindow.webContents.send("printPDF", content);
});
// when worker window is ready
ipcMain.on("readyToPrintPDF", (event) => {
  const pdfPath = path.join(os.tmpdir(), 'print.pdf');
  // Use default printing options
  workerWindow.webContents.printToPDF({}).then((data) => {
    fs.writeFile(pdfPath, data, function (error) {
      if (error) {
        throw error
      }
      shell.openItem(pdfPath)
      event.sender.send('wrote-pdf', pdfPath)
    })
  }).catch((error) => {
    throw error;
  })
});



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
