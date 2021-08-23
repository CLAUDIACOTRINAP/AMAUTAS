//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="MUY BIEN!"; messageTime="SE ACABÓ EL TIEMPO "; messageError="INTENTALO OTRA VEZ.."; messageErrorG="INTENTALO OTRA VEZ.."; messageAttempts="YA NO HAY INTENTOS!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QVA="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["SkFCw5NO","Q0VQSUxMTw==","UEVJTkU=","U0hBTVBPTw==","RVNQT05KQQ==","UEFTVEEgREUgRElFTlRFUw==","Q09SVEFVw5FBUw==","VEFMQ08=","",""];imaW=["0_WhatsApp_Image_2021-08-23_at_10.55.56_AM.jpeg","0_WhatsApp_Image_2021-08-23_at_10.55.40_AM.jpeg","0_WhatsApp_Image_2021-08-23_at_10.56.10_AM.jpeg","0_WhatsApp_Image_2021-08-23_at_10.56.30_AM.jpeg","0_WhatsApp_Image_2021-08-23_at_10.55.55_AM.jpeg","0_WhatsApp_Image_2021-08-23_at_10.56.42_AM.jpeg","0_WhatsApp_Image_2021-08-23_at_10.55.30_AM.jpeg","0_WhatsApp_Image_2021-08-23_at_10.56.30_AM__1_.jpeg","",""];queW=["","","","","","","","","",""];var wordsL=[5,7,5,7,7,16,9,5,"",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="AP_resources/media/"; textBNext="SIGUIENTE PALABRA ";
