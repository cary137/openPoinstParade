
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Shit Parade</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <script src="http://code.jquery.com/jquery.js"></script>
    <script type="text/javascript" src="js/pointsParade.js"></script>

    <!--Load Bootstrap-->
    <link href="inc/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="inc/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">    

    <!--Open Layers-->
    <script src='inc/OL/OpenLayers.js'></script>    

    <!-- Le styles -->    
    <style type="text/css">           
      .sidebar-nav {
        padding: 9px 0;
      }
      @media (max-width: 980px) {
        /* Enable use of floated navbar text */
        .navbar-text.pull-right {
          float: none;
          padding-left: 5px;
          padding-right: 5px;
        }
      }
    </style>

    <!--Local Overrides to Bootstrap defaults-->
    <link type="text/css" rel="stylesheet" href="css/style.css"/>

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
                                   <link rel="shortcut icon" href="../assets/ico/favicon.png">
  </head>

  <body>
        <div id="map"></div>

          <div id="text">
              <h1 id="title">Shit in Peace.  Shit Parade.</h1>

              <div id="tags">
                
              </div>
              <!-- Search input form -->
            <form>
              <fieldset>
                <legend>Search for peace:</legend>
                Your Location: <input type="text" placeholder="Search by city,state, zip">
                <p><a href="#" onclick="$('#inputLocation').toggle(); return false;"><strong>OR add your own peaceful shitting joint!</strong></a></p>
                <div id="inputLocation">
                  Shitter Handle: <input type="text" placeholder="Cafe Vita"></br>
                  Description: <input type="text" placeholder="Ferocious coffee-fueled hellhole.  But the door locks."></br>
                  Latitude: <input id="lat_input" name="lat_input" type="text" placeholder="47.614051"></br>
                  Longitude: <input id="long_input" name="long_input" type="text" placeholder="-122.319163">
                </div>                
                <button type="submit" class="btn">Search</button>
              </fieldset>
            </form>
            
        </div>
    </body>

  <!--Le Javascripts (consider reworking, such that we can move it up to head)-->
  <script src="js/fullScreen.js"></script>

</html>
