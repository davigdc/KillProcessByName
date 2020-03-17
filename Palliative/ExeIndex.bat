@echo off
color 2
@echo =================================================================
@echo Verificando rotina PCINF000 travadas...
cd C:\DCInfo\KillPCINF
node index.js
@echo =================================================================
@echo Done...
TIMEOUT /T 5
@echo off