@echo off
set PATH_TEMPLATE=templates
set PATH_DESTINATION=..\appverse-mobile-docs\docs
jsduck-4.0.beta2.exe --config appverse-config.json
REM rmdir /S /Q %PATH_DESTINATION%
mkdir %PATH_DESTINATION%\resources\fonts
mkdir %PATH_DESTINATION%\resources\images
mkdir %PATH_DESTINATION%\resources\css
copy /Y %PATH_TEMPLATE%\logo_128px.png %PATH_DESTINATION%\resources\images\logo_128px.png
copy /Y %PATH_TEMPLATE%\logo_64px.png %PATH_DESTINATION%\resources\images\logo_64px.png
copy /Y %PATH_TEMPLATE%\logo.png %PATH_DESTINATION%\resources\images\logo.png
copy /Y %PATH_TEMPLATE%\technology-stack.png %PATH_DESTINATION%\resources\images\technology-stack.png
copy /Y %PATH_TEMPLATE%\welcome-bg.gif %PATH_DESTINATION%\resources\images\welcome-bg.gif
copy /Y %PATH_TEMPLATE%\icon3.png %PATH_DESTINATION%\resources\images\icon3.png
copy /Y %PATH_TEMPLATE%\welcome.css %PATH_DESTINATION%\resources\css\welcome.css
copy /Y %PATH_TEMPLATE%\Journal.ttf %PATH_DESTINATION%\resources\fonts\Journal.ttf
copy /Y %PATH_TEMPLATE%\favicon.ico %PATH_DESTINATION%\favicon.ico
