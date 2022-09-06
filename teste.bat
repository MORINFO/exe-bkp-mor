call npm install --global yarn

call yarn add  pm2@latest -g 

call yarn add  pm2-windows-startup -g 

call pm2 delete all 

call pm2 save --force 

call pm2 start BKP-MOR.exe --max-memory-restart 300M

call pm2 save --force


