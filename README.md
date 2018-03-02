Kulturkatalogen Väst VERSION 1.0 - goes live: 2018-04-11 
name: kk_aj_Public_Acklay 

# webpack_sass_gulp
boilerplate för gulp och sass och webpack 

clona och använd.
kör
install 
1. skapa mappar 
2. kör bower init. fyll i allt optional
3. installera foundation: bower install foundation --save -dev
4. npm init
5. npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-sourcemaps webpack-stream gulp-minify-css gulp-uglify
6. npm install jquery --save
glöm inte att lägga till .gitignore (med texten:node_modules/ och bower_components/ ) i "node_modules" foldern så att inte alla dependencyfilerna kommer med i gitt repot.
7. npm install jquery.ui --save -dev
8. npm install jquery-ui-dist --save -dev


Kulturkatalogen Väst VERSION 1.0 - goes live: 2018-04-11 
kk_aj_Public_Acklay 
Patchnotes

kk_aj_publicbundle.1.0.2
*---------------------------------------------------
* lagt till maxlängd i inputfälten i arrangörsformuläret.
* lagt till verifiering av pressentationsbild så endast bilder går att lägga upp
* Uppladding av CV hoppar man mellan tabbarna i cv töms fälten på tidigare tab
* Verifiering av fälten för utställning på turné är ändrad så att endast fält som syns verifieras.

* BUGG FIX
  -fixat * verifieringen av utställning på turné verifierade osynliga fält så som ljud, ljus, mörkläggning, elektricitet m.m samma som föreställning på turné.
*---------------------------------------------------


kk_aj_publicbundle.1.0.5.js 
*---------------------------------------------------
* -TESTAD OCH KLAR ATT ANVÄNDA
* uppdaterat bytt let mot var
* gjort manuellt inte genererat via gulp
*---------------------------------------------------

kk_aj_publicbundle.1.0.6.js
*---------------------------------------------------
* miniferad med babel 
*---------------------------------------------------

kk_aj_publicbundle.1.0.9.js
*---------------------------------------------------
* använder babel för safari
* gör om kk_aj_kulturkatalogenWebpack med babel till kk_aj_kulturkatalogenWebpack.0.0.1.js innan den skickar till pub_jsconcatfiles
* ingen minifiering påslagen
*---------------------------------------------------

kk_aj_publicbundle.1.1.0.js
*---------------------------------------------------
* minifiering påslagen
*---------------------------------------------------