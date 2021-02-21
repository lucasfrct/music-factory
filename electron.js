import("./src/main")

const { app, BrowserWindow, webContents } = require('electron')


const path = require("path")

function createWindow () {
  // Create the browser window.
  	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
  	})

  win.loadURL("http://127.0.0.1:6125/index.html")
  
}

app.whenReady().then(createWindow)

console.log(webContents)