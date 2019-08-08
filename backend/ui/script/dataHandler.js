//Editing the users
onUserClickHandler = (access,ref) => {

    var url = "localhost:5000/api/v1/user"; 
    var x = document.getElementById(ref) ;
    var data = {
        email: x.elements["email"].value ,
        title: x.elements["title"].value,
        name: x.elements["name"].value,
        surname: x.elements["surname"].value,
        contact: x.elements["contact"].value,
        vehicle: [
            { 
                registration: x.elements["reg"].value , 
                manufacture: x.elements["man"].value, 
                model: x.elements["model"].value
            }
        ],
        residence: { 
            street: x.elements["street"].value ,
            surbub: x.elements["surbub"].value ,
            city: x.elements["city"].value,
            gps: {
                latitude: x.elements["latitude"].value ,
                longitude: x.elements["longitude"].value ,
            }
        },
    }

    switch(access){
        case "DELETE": accessDelete( url, x.elements["id"].value );
            break;
        case "UPDATE": accessUpdate(url,data);
            break;
        case "INSERT": accessInsert(url,data);
    }
    accessData(url);
};

//Editing claims 
onClaimClickHandler = ( access, ref) => {

    var url = "localhost:5000/api/v1/claim";
    var x = document.getElementById(ref) ;

    var data = {
        userid: x.elements["userid"].value,
        claimtype: x.elements["claimtype"].value, 
        date: x.elements["date"].value,
        total: x.elements["total"].value ,
        claiminfo: null ,
    };

    if( x.elements["claimtype"].value === "travel" ) {
        data.claiminfo =  {
            id: x.elements["id"].value ,
            odometer: {
                before: x.elements["before"].value,
                beforeimage: x.elements["beforeimage"].value,
                After: x.elements["after"].value,
                afterimage: x.elements["afterimage"].value ,
            } ,
            homeclient: x.elements["homeclient"].value ,
            homeoffice: x.elements["homeoffice"].value ,
            officeclient: x.elements["officeclient"].value ,
            clientoffice: {
                latitude: x.elements["latitude"].value ,
                longitude: x.elements["longitude"].value ,
            },
        }
    }else{
        data.claiminfo = {
            id: x.elements["id"].value,
            purpose: x.elements["purpose"].value,
            vendor: x.elements["vendor"].value,
            items: x.elements["item"].value.split(",") ,
            description: x.elements["description"].value,
            proof: x.elements["proof"].value , //Note naming convention ...
        }
    }

    switch(access){
        case "DELETE": accessDelete( url, x.elements["id"].value );
            break;
        case "UPDATE": accessUpdate(url,data);
            break;
        case "INSERT": accessInsert(url,data);
    }
};

onSettingsClickHandler = ( access, ref) => {
    var url = "localhost:5000/api/v1/settings";
    var x = document.getElementById(ref) ;
    var data = {
        id: x.elements["id"].value ,
        userid: x.elements["userid"].value ,
        autosubmission:{
            status: x.elements["status"].value,
            startdate: x.elements["data"].value ,
            interval: x.elements["interval"].value,
            skip: x.elements["skip"].value  ,
        },
        emaildestination: x.elements["emaildestination"].value , 
    }

    switch(access){
        case "DELETE": accessDelete( url, x.elements["id"].value );
            break;
        case "UPDATE": accessUpdate(url,data);
            break;
        case "INSERT": accessInsert(url,data);
    }
};

