@echo off
set NODE_PATH=%USERPROFILE%\AppData\Roaming\npm\node_modules;"%NODE_PATH%"
node %~dp0\pil-njs %*
