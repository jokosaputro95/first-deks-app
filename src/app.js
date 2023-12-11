const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './views/js/perload.js'),
        },
        /**
         * Ukuran layar HD 1280x720
         * Ukuran layar Full HD 1920x1080
         * Ukuran layar Quad HD (2K) 2560x1440
         * Ukuran layar Ultra HD (4K) 3840x2160
         */
        width: 1280,
        height: 720,
        resizable: false
    });

    // mainWindow.webContents.openDevTools()
    
    mainWindow.loadFile('./src/views/ui/index.html');
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    } else {
        app.quit();
    }
});