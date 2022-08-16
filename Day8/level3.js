
//  1   (Create an object literal called personAccount. 
// It has firstName, lastName, incomes, expenses properties and 
// it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.)   
let personAccount = {
    firstName: "Andersom",
    lastName: "Lewis",
    income: {
        salary: 20000,
        outsource: 2000
    },
    expenses: {
        data: 500,
        food: 2000,
        transport: 500
    },

    totalIncome: function () {
        let tIncome = 0;
        let values = Object.values(this.income);
        for (let i = 0; i < values.length; i++) {
            tIncome += values[i];
        }
        return tIncome;
    },
    totalExpenses: function () {
        let tExpenses = 0;
        let values = Object.values(this.expenses);
        for (let i = 0; i < values.length; i++) {
            tExpenses += values[i]
        }
        return tExpenses
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    },
    accountInfo: function () {
        return `name:${this.firstName} ${this.lastName}\n
                incomes:${Object.entries(this.income)}
                expenses: ${Object.entries(this.expenses)}
                totalIncome: ${this.totalIncome()}
                totalExpenses: ${this.totalExpenses()}
                accountBalance: ${this.accountBalance()}`
    }
}
console.log(personAccount);
//
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    

//2.a
const signUp = (username, email, password) => {
    users.forEach(user => {
        if (user.username === username && user.password === password) {
            console.log("you already have an account")
        } else {
            let date = new Date()
            let chars = "abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            users.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })
        }
    })
    console.log(users[users.length - 1]);
}
console.log(signUp('Alex','alex@alex.com','123123'));
console.log(signUp('johnn','johnn@john.com','124523'));
//2.b
const signIn = (username, password) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return users[i];
        } else {
            return "wrong username or password";
        }
    }
  
}
console.log(signIn('Alex','123123'));

const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]

//3.a
let rateProduct = (productNum, userId, rate) => {
    let theRating = {'userId': userId, 'rate': rate};
    products[productNum-1].ratings.push(theRating); 
    console.log(products[productNum-1].ratings);
 } 
 rateProduct(2, '23sdf2', 4);
//3.b
let averageRating = (productID) => {
    let total = 0;
    let pdt;
    
    for(const prod of products) {
       if(prod._id == productID)
          pdt = prod;
    } 
    
    for(const usr of pdt.ratings) {
         total += usr.rate;
    }
    return total/pdt.ratings.length; 
 }
 console.log(averageRating('eedfcf'));


 
 //4
//  const likeProduct=(name) =>{
//     for (let i = 0; i < products.length; i++) {
//         if(name.toLowerCase() === products[i].name.toLowerCase()){
//             if(!products[i].likes){
//                 let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
//                 let like = [];
//                 for (let i = 0; i < 6; i++) {
//                      like.push(chars[Math.floor(Math.random()* chars.length)]);
//                 }
//                 products[i].likes.push(like);
//             }
//             else{
//                 console.log("product has been liked");
//             }
            
//         }
//         else{
//             console.log("no product available");
//         }
        
//     }
//  }
 
//  likeProduct('mobile phone');
let likeProduct = (userId, productNo) => {
    let pdt = products[productNo-1];
    let index = pdt.likes.indexOf(userId);
   
    if(index == -1) {
      console.log( pdt.likes.push(userId));
    }  
    else {
       console.log(pdt.likes.splice(index, 1));   
    }
    
 }
 
 likeProduct('mobile phone', 1);


