const { app, BrowserWindow } = require('electron')
const { webContents } = require('electron')

const NodeID3 = require('node-id3')

const path = require("path");

function createWindow () {
  // Create the browser window.
  	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
  	})

  // and load the index.html of the app.
  //win.loadFile(path.join(__dirname, 'dist/music-factory/index.html'))
  //win.loadFile("index.html")
  win.loadURL("http://127.0.0.1:6125/index.html")
  
}

app.whenReady().then(createWindow)

console.log(webContents)