let employee = 
[
    {
    name:"Nithya",
    age:23,
    city:"Bangalore",
    salary:25000
    },
    {
        name:"Roja",
        age:28,
        city:"Vellore",
        salary:20000
    },
    {
        name:"Nandhini",
        age:24,
        city:"Chennai",
        salary:27000
    },
    {
        name:"Pooja",
        age:22,
        city:"Delhi",
        salary:30000
    },
    {
        name:"susan",
        age:26,
        city:"Hyderabad",
        salary:22000
    }
]

function display(employee){
    let tabledata = "";
    employee.forEach(function(employee,index){
        let currentdata = 
        `<tr>
            <td>${index+1}</td>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.city}</td>
            <td>${employee.salary}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        </tr>`
        tabledata += currentdata;
    })

    document.getElementsByClassName('tdata')[0].innerHTML = tabledata;
}
display(employee);

function deleteEmployee(index)
{
    employee.splice(index,1);
    display(employee);
}

function searchByName(){
    let searchvalue = document.getElementById('searchName').value;
    let newdata = employee.filter(function(employee){
       return (
           employee.name.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1
       );
    });
    display(newdata);
}

    function searchByCity(){
        let searchvalue = document.getElementById('searchCity').value;
        let data = employee.filter(function(employee){
        return (
            employee.city.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1
        );
     });
     display(data);
}