import { app } from 'electron';

import path from 'path';
import fs from 'fs';


import MainWindow  from "./assets/js/windows/mainWindow.js";


if (!app.requestSingleInstanceLock()) app.quit();
else app.whenReady().then(() => MainWindow.createWindow());