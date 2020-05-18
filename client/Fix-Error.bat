:: Jerm

:start
@echo off
echo.
echo ***************************************************************
echo **            This will delete the node_modules              **
echo **            folder and try to reinstall npm.               **
echo ***************************************************************
echo.
set /p run= "Are you sure? Type Y or N: "
if /I "%run%" == "Y" (echo Confirmed, deleting...) else (goto :start)
rmdir node_modules /S /Q
echo Done. Reinstalling.
echo.
npm install
npm audit fix
npm fund
clr
echo.
echo ***********************************************************************
echo **            Finished without any errors. Exiting...                **
echo ***********************************************************************
timeout 2
exit
