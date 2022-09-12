# BKP MORINFO.

 Instalar o Git no Servidor

 Git Clone deste repositório

 Criar um arquivo " configs.json" desta forma : {"id_empresa":0}  << no lugar do " 0 " colocar o ID da empresa que esta no https://bkp.morinfo.com.br/cadastro-empresa
 
 Criar uma arquivo update.bat da mesma forma que esta o update_exemplo.bat.

 No update.bat, alterar a informação: call pm2 start C:\Users\nicol\Desktop\Projetos\Ferramentas\exe-bkp-mor\BKP-MOR.exe
 
 Colocar no agendador de tarefas 1 vez por dia update.bat as 00:00
 
 Cadastro https://bkp.morinfo.com.br/cadastro-empresa
