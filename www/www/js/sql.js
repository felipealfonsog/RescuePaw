/**
 * 
 */

$(document).on('pageinit', '#showMapPage',function() {
//add listener when device ready
    var db = window.sqlitePlugin.openDatabase({name: "Animal_Db", bgType: 1});
    //function will be called when device ready
        db.transaction(populateDB, errorCB, successCB);
 
    //create table and insert some record
    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS ani');
        tx.executeSql('CREATE TABLE IF NOT EXISTS ani (name text,place text,lat integer,lon integer,location text)');
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Commerce Animal Shelter', '1203 Oneal Street, Commerce, TX', 33.252998, -95.899395,'Commerce')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Hearts of Life Animal Rescue', '471 County Road 4510, Sulphur Springs, TX', 33.21993, -95.56615,'Sulphur Springs')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Sulphur Springs Animal Shelter', '1313 Hillcrest Dr N, Sulphur Springs, TX', 33.15469, -95.61725,'Sulphur Springs')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Royse City Animal Control', '1101 N Josephine St, Royse City, TX', 32.98269, -96.32886,'Royse City')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Collin County Humane Society', '1825 Airport Rd, Rockwall, TX', 32.92594, -96.42929,'Rockwall')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Rockwall Animal Services & Adoption Center', '1825 Airport Rd, Rockwall, TX', 32.92594, -96.42929,'Rockwall')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('In-Sync Exotics Wildlife Rsc', '3430 Skyview Dr, Wylie, TX', 33.03650, -96.49192,'Wylie')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Perry Animal Care Center', '8411 Stacy Rd, McKinney, TX', 33.15019, -96.72629,'McKinney')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('The Wildlife Center at Crosstimbers Ranch', '11605 County Road 2312, Terrell, TX', 32.84010, -96.17115,'Terrell')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Winnsboro Animal Shelter', '835 Hope Ln, Winnsboro, TX', 32.95103, -95.27759,'Winnsboro')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Denton Animal Shelter', '300 S Woodrow L, Denton, TX', 33.21071, -97.11246,'Denton')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Operation Kindness', '3201 Earhart Dr, Carrollton, TX', 32.96786, -96.84762,'Carrollton')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Mesquite Animal Shelter & Adoption Center', '1650 Gross Rd, Mesquite, TX', 32.78637, -96.62928,'Mesquite')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('SPCA of Texas'' Jan Rees-Jones Animal Care Center', '2400 Lone Star Dr, Dallas, TX', 32.76812, -96.86081,'Dallas')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Humane Society of Dallas County', '719 Manor Way, Dallas, TX', 32.830312, -96.836538,'Dallas')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Irving City Animal Shelter', '4140 Valley View Ln, Irving, TX', 32.86215, -97.01868,'Irving')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Arlington Animal Shelter', '1000 SE Green Oaks Blvd, Arlington, TX', 32.65261, -97.09024,'Arlington')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Humane Society of North Texas', '1840 E Lancaster Ave, Fort Worth, TX', 32.74574, -97.30135,'Fort Worth')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Sansom Park Animal Shelter', '2303 Beverly Hills Dr, Fort Worth, TX', 32.79483, -97.39462,'Fort Worth')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Animal Control & Shelter', '1600 Clement Rd, Paris, TX', 33.67846, -95.54065,'Paris')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Tri County Horse Animal Rescue', '273 Eastridge Dr, Royse City, TX', 32.90794, -96.36669,'Royse City')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Sachse Animal Shelter', '6436 Sachse Rd, Sachse, TX', 32.97288, -96.55991,'Sachse')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Animal Hospital of Rowlett', '9501 Lakeview Pkwy, Rowlett, TX', 32.92158, -96.50695,'Rowlett')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Abe J Toggle Animal Shelter', '600 Tower St, Garland, TX', 32.90653, -96.60369,'Garland')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('City of Rowlett: Animal Shelter', '4402 Industrial St, Rowlett, TX', 32.90643, -96.56066,'Rowlett')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Animal Hospital of Heath', '209 Laurence Dr, Heath, TX', 32.83664, -96.47514,'Heath')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Rockwall County Veterinary Clinic', '2701 Market Center Dr, Rockwall, TX', 32.89803, -96.46336,'Rockwall')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Protective Animal League', 'Protective Animal League, Plano, TX', 33.01984, -96.69889,'Plano')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Animal Rescue Klub', '1806 K Ave, Plano, TX', 33.02450, -96.69911,'Plano')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Animal Rescue Klub', '580 Maple Ln, McKinney, TX', 33.14156, -96.61452,'McKinney')");
        tx.executeSql("INSERT INTO ani (name,place,lat,lon,location) VALUES('Commerce Test', 'Tamuc, Commerce, TX', 33.242525, -95.907319,'Commerce')");
    }
 
    //function will be called when an error occurred
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }
 
    //function will be called when process succeed
    function successCB() {
        console.log("success! from inserting the values into Db");
     }
});