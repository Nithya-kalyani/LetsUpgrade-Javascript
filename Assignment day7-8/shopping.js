let merch = [
    {
        id: 1,
        name: "Black T-shirt",
        size: "L",
        color: "Black",
        price: 900,
        image: "product1.jpg",
        description: "Good looking Black Tshirt",
      },
      {
        id: 2,
        name: "Blue hoodie",
        size: "M",
        color: "Blue",
        price: 1700,
        image: "product2.jpg",
        description: "Good looking Blue hoodie",
      },
    
      {
        id: 3,
        name: "Yellow T-Shirt",
        size: "S",
        color: "Yellow",
        price: 500,
        image: "product3.jpg",
        description: "Good looking teak Yellow",
      },
    
      {
        id: 4,
        name: "Black Shirt",
        size: "M",
        color: "Black",
        price: 1000,
        image: "product4.jpg",
        description: "Good looking Black Shirt",
      },
    
      {
        id: 5,
        name: "White Top",
        size: "S",
        color: "White",
        price: 2300,
        image: "product5.jpg",
        description: "Good looking White Top",
      },
    
      {
        id: 6,
        name: "Blue lehanga",
        size: "M",
        color: "Blue",
        price: 1500,
        image: "product6.jpg",
        description: "Good looking Traditional Dress",
      },
  
      {
          id: 7,
          name: "Black short top",
          size: "L",
          color: "Black",
          price: 700,
          image: "product7.jpg",
          description: "Beautifull short top",
        },
  
        {
          id: 8,
          name: "Black T-shirt",
          size: "M",
          color: "Black",
          price: 1500,
          image: "product8.jpg",
          description: "Good looking Black T-shirt",
        },
  
        {
          id: 9,
          name: "Checked short Tops",
          size: "L",
          color: "yellow and black",
          price: 3500,
          image: "product9.jpg",
          description: "Good looking Checked short Tops",
        },
  
        {
          id: 10,
          name: "White Midi",
          size: "XL",
          color: "White",
          price: 1900,
          image: "product10.jpg",
          description: "Good looking White Midi",
        },
  
        {
          id: 11,
          name: "Pink Frock",
          size: "S",
          color: "Pink",
          price: 1500,
          image: "product11.jpg",
          description: "Good looking Pink Frok",
        },
  
        {
          id: 12,
          name: "Yellow hoodie",
          size: "XS",
          color: "Yellow",
          price: 500,
          image: "product12.jpg",
          description: "Good looking kid Yellow hoodie",
        },
    ];
   let cart=[];
   let count=0;
  function displaymerch(merchd, type="main", place="card") {
      console.log(merchd);
      let strmerch = "";
      let arrmerch="";
      merchd.forEach(function (ele, index) {
          if(type=="main"){
              strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <div class="btn btn-info" onclick="addToCart(${ele.id})">Add to Cart</div>
          </p>
        </div>
        </div>`;
        arrmerch+=strmerch;
          }
          
      if(type=="cartd"){
          strmerch = ` <div class="productcardbg">
          <div class="image">
          <img src="${ele.image}" width="100%" />
        </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <div  class="btn btn-info" onclick="deletemerch(${ele.id})">Delete item</div>
          </p>
        </div>
        </div>`;
              
          arrmerch += strmerch;    
  
          }
      });
      
  document.getElementById(place).innerHTML = arrmerch;
      
  }
  
  
  function getProductByID(mercha, id) {
    return mercha.find(function (ele) {
      return ele.id == id;
    });
  }
  let flag=false;
  function addToCart(id) {
  flag=false;
    let item = getProductByID(merch, id);
  
    cart.forEach(function(element){
        if(element.id==item.id){
            flag=true;
            
        }
        
  
    })
    if (flag) {
        alert("It is already in Cart");
      return 0;
    }
    cart.push(item);
    count+=1;
    document.getElementById("numb").innerText=count;
    let type="cartd";
    let place="cartcard";
    displaymerch(cart, type, place);
  
  }
  
  
  function deletemerch(id){
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function (item1) {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count-=1;
     document.getElementById("numb").innerText = count;
     let type = "cartd";
     let place = "cartcard";
     displaymerch(cart, type, place);
  }
  
  function filter(){
      let minv=document.getElementById("minp").value;
      let maxv = document.getElementById("maxp").value;
      let items= merch.filter(function(itemsl){
          return itemsl.price>=minv && itemsl.price<=maxv;
      })
       displaymerch(items);
      document.getElementById("minp").value="";
        document.getElementById("maxp").value="";
  }
  
  function search(){
      let str= document.getElementById("serstr").value;
      console.log(str);
      let items = merch.filter(function(ele) {
        let searchString =
      ele.name + " " + ele.color + " " + ele.description;
        return searchString.toUpperCase().indexOf(str.toUpperCase())!=-1;
      });
      displaymerch(items);
  
  
  }
  displaymerch(merch);