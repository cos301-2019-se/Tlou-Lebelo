//1. Editing the users -----------------------------------------------------------
onUserClickHandler = (ref) => {

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
                model: x.elements["model"].value
            }
        ],
        residence: { 
            street: x.elements["street"].value ,
            surbub: x.elements["surbub"].value ,
            city: x.elements["city"].value,
        },
    }

    var access = x.elements["options"].value ;
    switch(access){
        case "DELETE": accessDelete( url, x.elements["id"].value );
            break;
        case "UPDATE": accessUpdate(url,data);
            break;
        case "INSERT": accessInsert(url,data);
    }

    //accessData(url);
    document.getElementById(ref).reset();
};

//2. Editing claims-------------------------------------------------------------------------
onClaimClickHandler = ( ref) => {

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
                before: x.elements["before"].value ,
                After: x.elements["after"].value ,
            } ,
            homeclient: x.elements["homeclient"].value ,
            homeoffice: x.elements["homeoffice"].value ,
            officeclient: x.elements["officeclient"].value ,
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

    var access = x.elements["options"].value ;
    switch(access){
        case "DELETE": accessDelete( url, x.elements["id"].value );
            break;
        case "UPDATE": accessUpdate(url,data);
            break;
        case "INSERT": accessInsert(url,data);
    }

    //accessData(url);
    document.getElementById(ref).reset();
};

//3. Settings Update ------------------------------------------------------------------
onSettingsClickHandler = ( access, ref) => {
    var url = "localhost:5000/api/v1/settings";
    var x = document.getElementById(ref) ;
    var data = {
        userid: x.elements["userid"].value ,
        autosubmission:{
            status: x.elements["autosubmit"].value,
            startdate: x.elements["data"].value ,
            interval: x.elements["interval"].value,
            skip: x.elements["skip"].value  ,
        },
        submittoemail: x.elements["submittoemail"].value , 
    }

    var access = x.elements["options"].value ;
    switch(access){
        case "DELETE": accessDelete( url, x.elements["id"].value );
            break;
        case "UPDATE": accessUpdate(url,data);
            break;
        case "INSERT": accessInsert(url,data);
    }

    //accessData(url);
    document.getElementById(ref).reset();
};

