window.onload = function () {
    let initialdetails = [
      {
        name: "Nithya ",
        source: "abc",
        destination: "efg ",
        number: "2",
        capacity: "xyz ",
      }
    ];
  
    if (localStorage.getItem("details") == null) {
      localStorage.setItem("details", JSON.stringify(initialdetails));
    }
  };
  
  function display(superdetails = undefined) {
    let tabledata = "";
    let details;
    if (superdetails == undefined) {
      details = JSON.parse(localStorage.getItem("details"));
    } else {
      details = superdetails;
    }
  
    details.forEach(function (data, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
        <td>${data.source}</td>
        <td>${data.destination}</td>
        <td>${data.number}</td>
        <td>${data.capacity}</td>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    
  }
  
  display();
  
  function addDetails(e) {
    e.preventDefault();
    let data = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let capacity = document.getElementById("capacity").value;
    data.name = name;
    data.source = source;
    data.destination = destination;
    data.number = number;
    data.capacity = capacity;
  
    let details = JSON.parse(localStorage.getItem("details"));
    details.push(data);
    localStorage.setItem("details", JSON.stringify(details));
  
    display();
  
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("capacity").value = "";
  }
  
  function searchBySource(){
    let searchValue = document.getElementById("searchSource").value;
    let details = JSON.parse(localStorage.getItem("details"));
    let newdata = details.filter(function (data) {
      return (
        data.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  function searchByDestination(){
    let searchValue = document.getElementById("searchDestination").value;
    let details = JSON.parse(localStorage.getItem("details"));
    let newdata = details.filter(function (data) {
      return (
        data.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }