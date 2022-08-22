@echo
npm install pm2@latest -g

npm install pm2-windows-startup -g

pm2 start verificaarquivos.exe

pm2 save --force