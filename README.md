🏠PropertyListingSystem–Backend(SDEInternAssignment)
Ascalableandefficientbackendsystemformanagingrealestatelistings.Thisbackendsupportsuserauthentication,propertyCRUDwithownershipvalidation,advancedfiltering,favoritesmanagement,andRediscaching.BuiltusingTypeScript,Node.js,MongoDB,andRedis.

✅AssignmentObjectives
Thisbackendfulfillsthefollowingtasks:
ImportCSVpropertydataintoMongoDB
CRUDoperationsforproperties(ownershipenforced)
Advancedfilteringbasedonallpropertyattributes
Userregistration&loginusingemail/passwordwithJWT
Favoritesfunctionality(add/remove/view)
Rediscachingintegrationforperformance
Bonus:DeployedbackendtoRenderorVercel(Youcandothisoptionally)
Bonus:Propertyrecommendationsystem(Tobeimplemented)

📦TechStack
Technology	Purpose
Node.js&TypeScript	Backend&typesafety
Express.js	APIFramework
MongoDB+Mongoose	Databaseforproperty/userdata
Redis	Cachinglayerforfastreads
JWT+bcryptjs	Auth&secureaccess
csv-parser	CSVfileparsing

🧰GettingStarted
1.ClonetheRepository
gitclonehttps://github.com/https://github.com/MuhammadUmer2004-sys/property-listing-system.git
cdproperty-listing-system

2.InstallDependencies
npminstall

3.EnvironmentVariables
Createa.envfileintherootdirectory:
PORT=5000
MONGO_URI=mongodb://localhost:27017/propertyApp
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379

🚀StarttheServer
DevelopmentMode
npmrundev
ProductionBuild
npmrunbuild
npmstart

📥ImportPropertyData(CSV)
ToimportthedatasetintoMongoDB:
PlacetheCSVfileintherootorupdatethepathinsrc/utils/importCSV.ts
Run:
npmrunimport
Thisusescsv-parserandProperty.insertMany()toloadthedata.

🧪APIEndpointsOverview
🔐AuthRoutes(/api/auth)
Method	Endpoint	Description
POST	/register	Registernewuser
POST	/login	LoginandgetJWT
JWTisrequiredforprotectedroutes.Useitinheaders:
Authorization:Bearer<token>

🏠PropertyManagement(Planned)
Method	Endpoint	Auth	Description
GET	/api/properties	❌	Listallproperties(withfilters)
POST	/api/properties	✅	Createaproperty(user-owned)
PUT	/api/properties/:id	✅	Updateproperty(onlycreator)
DELETE	/api/properties/:id	✅	Deleteproperty(onlycreator)
Advancedfilters(e.g.,price,bedrooms,location,amenities,etc.)tobehandledviaqueryparams.
Ownershipenforcedusingreq.userId===property.createdBy.

💖Favorites(Planned)
Method	Endpoint	Auth	Description
POST	/api/favorites/:id	✅	Addapropertytofavorites
DELETE	/api/favorites/:id	✅	Removeapropertyfromfavorites
GET	/api/favorites	✅	Listallfavoritedproperties

Userschemasupports:
favorites:[ObjectId]//ReferencestoProperty

🔁RedisIntegration
Redisclientsetupinsrc/config/redis.ts
Willbeusedtocachefrequentpropertysearch/filterresponsesandreduceMongoDBreads
redisClient.connect();//Automaticallycalledatstartup

✉️Recommendations(Bonus-NotYetImplemented)
Plannedstructure:
UserAsearchesforUserBbyemail
RecommendspropertyXtoUserB
PropertyIDisstoredinrecommendationsReceivedarrayinUserB'sdocument
recommendationsReceived:[ObjectId]//Propertyreferences

🗂️ProjectStructure
src/
├──config/#DB&Redisconnection
├──controllers/#Controllersforbusinesslogic
├──middleware/#Authmiddleware(JWT)
├──models/#Mongooseschemas
├──routes/#Expressroutehandlers
├──types/#ExpressTypeScriptaugmentation
├──utils/#CSVimporter
└──index.ts#Entrypoint

📜Scripts
Script	Description
npmrundev	Startdevelopmentserver
npmrunbuild	Compiletodist/
npmstart	Runproductionserver
npmrunimport	ImportpropertiesfromCSVfile

🧩ToDo(PlannedFeatures)
Property CRUD with filtering & ownership checks
FavoritesCRUDendpoints
Rediscachinglayerforqueries
Propertyrecommendations
DeploymenttoRender/VercelwithMongoDBAtlas

🌐Deployment(OptionalBonus)
You can deploy using:
Render
Vercel

MongoDBAtlas

Updateyour.envwithhostedMONGO_URIandREDIS_URL.
