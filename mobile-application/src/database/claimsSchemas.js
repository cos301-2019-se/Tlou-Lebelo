import realm from 'realm' ;
export const CLAIM_SCHEMA = "Claim" ;
export const TRAVEL_SCHEMA = "Travel" ;
export const PERSONAL_SCHEMA = "Personal" ;

//1. Claim Model and Properties ...
export const ClaimSchema = {
    name: VEHICLE_SCHEMA ,
    primaryKey: 'id',
    properties: {
        id: 'date',
        type: 'string',
        date: 'date',
        total: 'float',
    }
};

//3. User Model and Properties ...
export const PersonalSchema = {
    name: PERSONAL_SCHEMA ,
    primaryKey: 'id',
    properties: {
        id: 'date',
        purpose: 'string',
        vendor: 'string',
        item: 'string',
        description: 'string',
        receipt: 'data?',
    }
};

//4. Client Model and Properties ...
export const TravelSchema = {
    name: TRAVEL_SCHEMA ,
    primaryKey: 'id',
    properties: {
        id: 'date',
        officeclient: 'int',
        homeoffice: 'double',
        homeclient: 'double',
        odometer: 'int?',
        address: 'double?'
    }
};

//Define the database for usage .........
const databaseOptions = {
    path: 'claims.realm',
    schema: [ClaimSchema, TravelSchema, PersonalSchema],
    schemaVersion: 0
};

//------------------------------------------------------------------------------------------------------------------------------
export const insertNewUser = newUser => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write(() => {
            realm.create( USER_SCHEMA, newUser );
            resolve(newUser);
        })
    }).catch((error) => reject(error));
});

export const updateUser = newUserInfo => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write(() => {
            let updatingUser = realm.objectForPrimaryKey( USER_SCHEMA, newUserInfo.id );
            updatingUser.name = newUserInfo.name ;
            updatingUser.surname = newUserInfo.surname ;
            updatingUser.email = newUserInfo.email ;
            updatingUser.contact = newUserInfo.contact ;
            updatingUser.title = newUserInfo.title ;
            resolve();
        })
    }).catch((error) => reject(error));
});

export const queryUser = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let userInfo = realm.objects(USER_SCHEMA);
        resolve(userInfo);  
    }).catch((error) => {        
        reject(error);  
    });;
});
//---------------------------------------------------------------------------------------------------------------------------------
export const insertNewSettings = newSettings => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write(() => {
            realm.create( SETTINGS_SCHEMA, newSettings );
            resolve(newSettings);
        })
    }).catch((error) => reject(error));
});

export const updateSettings = newSettings => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write(() => {
            let updatingUser = realm.objectForPrimaryKey( SETTINGS_SCHEMA, newSettings.id );
            updatingUser.name = newSettings.name ;
            updatingUser.surname = newSettings.surname ;
            updatingUser.email = newSettings.email ;
            updatingUser.contact = newSettings.contact ;
            updatingUser.title = newSettings.title ;
            resolve();
        })
    }).catch((error) => reject(error));
});

export const querySetting = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let settingsInfo = realm.objects(SETTINGS_SCHEMA);
        resolve(settingsInfo);  
    }).catch((error) => {        
        reject(error);  
    });;
});
//---------------------------------------------------------------------------------------------------------------------------------
export const insertNewVehicle = newVehicle => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write(() => {
            realm.create( VEHICLE_SCHEMA, newVehicle );
            resolve(newVehicle);
        })
    }).catch((error) => reject(error));
});

export const updateVehicle = newVehicle => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then( realm => {
        realm.write(() => {
            let updatingVehicle = realm.objectForPrimaryKey( VEHICLE_SCHEMA, newVehicle.id );
            updatingVehicle.registration = newVehicle.registration ;
            updatingVehicle.description = newVehicle.description ;
            updatingVehicle.email = Date() ;
            resolve();
        })
    }).catch((error) => reject(error));
});

export const queryVehicle = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let vehicleInfo = realm.objects(VEHICLE_SCHEMA);
        resolve(vehicleInfo);  
    }).catch((error) => {        
        reject(error);  
    });;
});
//---------------------------------------------------------------------------------------------------------------------------------
export const insert 