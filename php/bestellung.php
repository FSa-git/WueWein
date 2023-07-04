<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>WueWein | Anfragen</title>
    <link rel="stylesheet" href="./styles/main.css" />
</head>
<body>
<?php
print "<h1>Wü-Wein sagt Danke für Ihre Anfrage!</h1>";

if(isset($_POST["submit"])){

$name = $_POST["vorname"];

$nachname = $_POST["nachname"];

$adresse = $_POST["adresse"];
$strNummer = $_POST["strNummer"];

$plz = $_POST["plz"];
$land = $_POST["land"];

$tel = $_POST["tel"];

// Auswahl

// $trollinger = $_POST["trollinger"];
// $spaethburgunder = $_POST["spaethburgunder"];
// $gutedel = $_POST["gutedel"];

$weinAuswahl = $_POST["weinAuswahl"];
$selectedWeine = [];

if(is_array($weinAuswahl)){
    foreach($weinAuswahl as $wein){
      if($wein == "trollinger"){
        $selectedWeine[] = "Fellbacher Tradition, Trollinger (2016)";
      }
      if($wein == "spaetburgunder"){
        $selectedWeine[] = "Rotenberg, Spätburgunder (2014)";
      }
      if($wein == "gutedel"){
        $selectedWeine[] = "Alte Weinsteige, Gutedel (2008)";
      }
    }
  }

$msg = $_POST["msg"];

}

print "<h2>Ihre Daten</h2>";

echo "<p>Vorname: <strong>$name</strong></p>";
echo "<p>Nachname: <strong>$nachname</strong></p>";
echo "<p>Adresse: <strong>$adresse , $strNummer</strong></p>";
echo "<p>PLZ: <strong>$plz</strong></p>";
echo "<p>Land: <strong>$land</strong></p>";
echo "<p>Telefonnummer: <strong>$tel</strong></p>";

print "<h2>Ihre Auswahl</h2>";

// if($trollinger == "trollinger"){
//     echo "<p>Trollinger: <strong>$trollinger</strong></p>";
// }
// if($spaethburgunder == "spaethburgunder"){
//     echo "<p>Spätburgunder: <strong>$spaethburgunder</strong></p>";
// }
// if($gutedel == "gutedel"){
//     echo "<p>Gutedel: <strong>$gutedel</strong></p>";
// }

if(!empty($selectedWeine)){
    foreach($selectedWeine as $wein){
      echo "<p>Wein-Auswahl: <strong>$wein</strong></p>";
    }
}

print "<h2>Ihre Nachricht</h2>";
echo "<p>$name .",". $nachname . :<strong>$msg</strong></p>";

echo "<p>Vielen Dank für Ihre Anfrage!</p>";

echo "<p>Wir werden uns in Kürze bei Ihnen melden.</p>";
echo "<p>Mit freundlichen Grüßen</p>";
echo "<p><strong>Ihr Wü-Wein Team</strong></p>";

echo "<p><a href='./index.html'>Zurück zur Startseite</a></p>";

echo "</pre>";


?>
</body>
</html>