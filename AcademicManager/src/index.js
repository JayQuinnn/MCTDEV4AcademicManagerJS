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
      nodeIntegrationInWorker: true,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // let workerWindow = new BrowserWindow({
  //   webPreferences: {
  //     contextIsolation: false,
  //     nodeIntegrationInWorker: true,
  //   }
  // });
  // console.log(workerWindow)
  // workerWindow.loadURL("file://" + __dirname + "/worker.html");
  // //workerWindow.hide();
  // workerWindow.webContents.openDevTools();
  // console.log(workerWindow)
  // //workerWindow.on("closed", () => {
  // //workerWindow = undefined;
  // //});
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

// ipcMain.on("printPDF", (event, content) => {
//   console.log(content);
//   const pdfPath = 'some-ducking-pdf.pdf';
//   const win = BrowserWindow.fromWebContents(event.sender);
//   console.log(win.webContents)

//   win.webContents._printToPDF({}, (error, content) => {
//     console.log("YEET1")
//     if (error) return console.log(error.message);
//     console.log("YEET2")

//     fs.writeFile(pdfPath, content, err => {
//       console.log("YEET3")
//       if (err) return console.log(err.message);
//       shell.openExternal('file://' + pdfPath);
//       event.sender.send('wrote-pdf', pdfPath);
//     })
    
//   })
// });
// // when worker window is ready
// ipcMain.on("readyToPrintPDF", (event) => {
//   const pdfPath = 'C:/Users/joche/OneDrive/Documenten/pdfexports/some-ducking-pdf.pdf'
//   const win = BrowserWindow.fromWebContents(event.sender);

//   win.webContents.printToPDF({}, (error, data) => {
//     if (error) return console.log(error.message);

//     fs.writeFile(pdfPath, data, err => {
//       if (err) return console.log(err.message);
//       shell.openExternal('file://' + pdfPath);
//       event.sender.send('wrote-pdf', pdfPath);
//     })
    
//   })
// });



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
