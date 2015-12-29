# CLIR + DLF Mapping

Use [QGIS](http://www.qgis.org/en/site/).

- For Windows, use [the installer](https://www.qgis.org/en/site/forusers/download.html)
- For OS X, use [Homebrew](http://brew.sh/)

```
$ xcode-select --install
$ brew install homebrew/python/matplotlib-basemap
$ brew tap caskroom/cask
$ brew cask install qgis
```

Note, OS X users may need to [implement this work around](https://github.com/caskroom/homebrew-cask/issues/15131#issuecomment-156300400).

## Install Plugin

1. Go to **Plugins->Manage and Install Plugins...**
2. Search for "**MMPGIS**" and install the plugin
4. Click Close when you're finished

## Processing

Requirements for a new data layer to geocode is `address`, `city`, and `state`.
As long as you have these fields, you're good to go for this process.

- Save each tab in your Excel document as a **MS-DOS Comma Separated (.csv)**
 file
- Click on **MMQGIS->Geocode->Geocode CSV with Google/Open Street Map**
- Click **Browse** and navigate to your newly created CSV file
- Ensure that the `Address Field`, `City Field`, `State Field`, and `Country Field` settings are correct
- Note where the **Output Shapefile** is located
- Set the `Not Found Output List` location where you can find it (e.g. the same directory as the csv file)
- Click **OK** and go get some coffee...it'll take a while to process

When the file is finished being processed, it will show the geocoded information on a map (there will be no base map). To check your data with a base map, install the **OpenLayers Plugin**.

- **Web->OpenLayers Plugin->OpenStreetMap->OpenStreetMap**

Make sure you move the new layer **below** the other layers you have created (or they will be hidden).

### Outliers

After everything is processed, there were be a number of addresses that the geocoding service couldn't find for whatever reason (e.g. bad address, typos, crashed service, geocoding limits). Open up the `not-found.csv` file (or whatever you named it) and fix any issues you can. When you're done, run the geocoding on the `not-found.csv` file.

QGIS will create a new layer with this data and you now need to merge in to the proper layer (there may be many at this point).

- Click on **MMQGIS->Combine->Merge Layers**.
- Select the layers to merge
- Set the `Output Shapefile` to where you are saving your final datasets (e.g. `~/projects/maps/layers/`)

## Notes

1. Working with GIS data will create a lot of files. **Creating new directories** will help.

## Mapbox

>>Notes; GeoJSON plugin
