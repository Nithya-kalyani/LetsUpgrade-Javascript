let personalDetails = 
[
    {
        name:"Nithya",
        age:23,
        country:"India",
        hobbies:["reading","painting","illustration"]
    },
    {
        name:"Roja",
        age:45,
        country:"America",
        hobbies:["coding","craftworks","cricket"]
    },
    {
        name:"priya",
        age:25,
        country:"Russia",
        hobbies:["painting","books","playing"]
    },
    {
        name:"Nila",
        age:56,
        country:"India",
        hobbies:["planting","netsurfing","drawing"]
    }
       
]

function displayAge(personalDetails)
{
    console.log("People with age less than 30 are");
    for(i=0;i<personalDetails.length;i++)
    {
        if(personalDetails[i].age<30)
        {
            console.log(personalDetails[i]);
        }
    }
}
displayAge(personalDetails);

function displayCountry(personalDetails)
{
    console.log("People with Country India are");
    for(i=0;i<personalDetails.length;i++)
    {
        if(personalDetails[i].country=="India")
        {
            console.log(personalDetails[i]);
        }
    }
}
displayCountry(personalDetails);