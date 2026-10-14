
const dress = [{name: "Shirt", size: "M", color: "Blue" },{name: "Pants", size: "M", color: "Black" },{name: "Jacket", size: "S", color: "Red" },{name: "Skirt", size: "M", color: "Green" },{name: "Dress", size: "M", color: "Yellow" }];
const choosed = dress.filter((item) => item.size === "M").map((item) => item.name).slice(0,2) .find((item) => item === "Shirt");
console.log(choosed);

const dresss = {name: "Shirt", size: "M", color: "Blue",
        hello() {
        if (this.size === "M") {
            return "The size is medium";
        }
},
update()
{
   return this.color = "Red";
},
};
console.log(dresss.hello());
console.log(dresss.update());
console.log(dresss);

//reduce
const prices = [120,60,899];
console.log(prices.reduce((a,b) => a+b,0));


//find
const exam= [{name:"kiran", marks:10},{name:"sam", marks:20},{name:"john", marks:30}];
console.log(exam.find((item) => item.name="kiran"));

//closure
function greet(name) {
    const greeting = "hello"; 
    return function() {
        console.log(`${greeting} ${name}`);
    };
}

const sayHelloAsha = greet("asha");

sayHelloAsha(); 

//async
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();