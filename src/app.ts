import { app } from 'electron';
import MainWindow  from "./assets/js/windows/mainWindow.js";

if (!app.requestSingleInstanceLock()) app.quit();
else app.whenReady().then(() => MainWindow.createWindow());