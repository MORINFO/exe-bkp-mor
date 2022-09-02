@echo
npm install pm2@latest -g && npm install pm2-windows-startup -g && pm2 delete all && pm2 save --force && pm2 start BKP-MOR.exe && pm2 save --force