
//tag name

// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) 
// console.log(allTitles.length)
// for (let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i]) // prints each elements in the HTMLCollection
//   }
  //class name

//   const allTitles=document.getElementsByClassName("title")
//   console.log(allTitles.length);
//   for (let index = 0; index < allTitles.length; index++) {
//     console.log(allTitles[index])
    
//   }
  //by id

//   const allTitles=document.getElementById("first-title")
//   console.log(allTitles)
  //querySelector

//   let firstTitle = document.querySelector('h1') // select the first available h1 element
//    console.log(firstTitle)
// let firstTitle1 = document.querySelector('#first-title') // select id with first-title
// console.log(firstTitle1)
// let firstTitle2 = document.querySelector('.title')//select class with first title
// console.log(firstTitle2)

//querySelectorAll
// const allTitles = document.querySelectorAll('h1')
// console.log(allTitles)
// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i])
// }
// const allTitles = document.querySelectorAll('.title')
// allTitles.forEach(title => console.log(title))

//adding attributes[ 
 //const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
  //setattribute
//   titles[3].setAttribute("class","title")
//   titles[3].setAttribute("id","fourth-title")
// console.log(titles)
//]

   //add method and remove method by using classlist
//    titles[3].classList.add('title', 'header-title')
//    titles[3].classList.remove('title', 'header-title')
//    console.log(titles)

//Adding Text to HTML element
//1.Adding Text content using textContent
// const titles = document.querySelectorAll('h1')
// titles[3].textContent = 'Fourth Title'
// console.log(titles)
//adding style
//Adding Style Background Color,font size,color
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
    title.style.backgroundColor="red"
  } else {
    title.style.color = 'red'
    title.style.backgroundColor="green"
  }
})
console.log(titles)



