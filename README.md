SteelSeries-Weather-Gauges (variation)
==========================

HTML 5 Weather Gauges Templates for Cumulus, Weather Display, WeatherCat, and other PWS programs. It is based on the SteelSeries gauges from HansSolo and MCrossley. Adds layouting for use from smartphone, WU forecast 7 days Awekas badge and PM 2.5µ and 10µ to the avaialbles gauges.

As there is no setup for this variation, the easiest for installing is : 
  - Run the standard SS skin package
  - Run the setup for forecast extension (variation is required for new WU Icons in forecast section)
    -  Git Clone the forecast repo : https://github.com/sbsrouteur/weewx-forecast.git
    -  install the extension from the downloaded folder : 
      - ./bin/wee_extension --install <Cloned Source Folder>/Weewx/weewx-forecast/
  - overwrite follwong files from you ss skin folder :
  ```
     cp ./SteelSeries-Weather-Gauges/weather_server/WeeWX/* .
     cp -r ./SteelSeries-Weather-Gauges/web_server/scripts/* ./scripts
    
  ```
