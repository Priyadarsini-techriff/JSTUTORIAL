const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
        'HTML',
        'HTML5',
        'CSS',
        'CSS3',
        'JS',
        'JavaScript',
        'ES6',
        'Promise',
        'async await',
        'Database',
        'React',
        'React Hooks',
        'Context API',
        'React Router',
        'Web Storage',
        'localStorage',
        'sessionStorage',
        'Redux',
        'Node',
        'MongoDB',
        'SQL',
        'API',
        'DOM',
        'data science',
        'MERN',
        'Python',
        'Flask',
        'Statistics',
        'Linear Algebra',
        'Numpy',
        'Pandas',
        'Scipy',
        'Scikit-learn',
        'Visualization',
        'D3.js'
    ],
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        titles: [
            'Educator',
            'Programmer',
            'Developer',
            'Motivator',
            'Content Creator'
        ],
        qualifications: [
            'MSc. Computer Science Ongoing',
            'BSc. Information and Communication Eng.',
            'MSc. Food Technology',
            'BSc.Food Technology'
        ],
        socialLinks: [
            {
                social: 'LinkedIn',
                url: 'https://www.linkedin.com',
                fontawesomeIcon: '<i class="fab fa-linkedin">'
            },
            {
                social: 'Twitter',
                url: 'https://twitter.com',
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                social: 'Github',
                url: 'https://github.com',
                fontawesomeIcon: '<i class="fab fa-github-square"></i>'

            }
        ],
        skills: [
            'Web Development',
            'Data Analysis',
            'Data Visualization',
            'Programming',
            'Databases',
            'Developing API'
        ],
        bio:
            'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
        {
            name: '30 Days Of Python',
            topics: [
                'Python',
                'Flask',
                'Numpy',
                'Pandas',
                'Statistics',
                'API',
                'MongoDB'
            ],
            status: 'Done'
        },
        {
            name: '30 Days Of JavaScript',
            topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
            status: 'Ongoing'
        },
        {
            name: '30 Days Of HTML&CSS',
            topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
            status: 'Coming'
        },
        {
            name: '30 Days Of React',
            topics: [
                'React',
                'React Router',
                'Redux',
                'Context API',
                'React Hooks',
                'MERN'
            ],
            status: 'Coming'
        },
        {
            name: '30 Days Of ReactNative',
            topics: ['ReactNative', 'Redux'],
            status: 'Coming'
        },
        {
            name: '30 Days Of Fullstack',
            topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
            status: 'Coming'
        },
        {
            name: '30 Days Of DataAnalysis',
            topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
            status: 'Coming'
        },
        {
            name: '30 Days Of MachineLearning',
            topics: [
                'Python',
                'Numpy',
                'Pandas',
                'Scikit-learn',
                'Scipy',
                'Linear Algebra',
                'Statistics',
                'Visualization'
            ],
            status: 'Coming'
        }
    ]
}



////////////////
let container = document.querySelector('.container');

//date-time generate

function getDate() {
    let date = new Date();
    return date.toLocaleString()
}

// hexacolor generate
function generateColor() {
    let alphanums = '0123456789abcdef';

    let colorArr = [];
    for (let i = 0; i < 6; i++) {
        let hexacolor = Math.floor(Math.random() * 15);
        colorArr.push(alphanums[hexacolor]);
    }
    return '#' + colorArr.join('');
}

//heading(description)
let h1 = document.createElement('h1');
h1.innerHTML = '<b>Asabeneh Yetayeh Challenges in <span>2020</span></b>';
h1.style.textAlign = 'center';
h1.style.fontSize = '25px';
h1.style.fontWeight = '400';
h1.style.marginBottom = '5px';
h1.style.padding = '5px';
container.appendChild(h1);

let yearText = document.querySelector('span');
yearText.style.fontSize = '45px';
setInterval(() => yearText.style.color = generateColor(), 1000);

//challenge title
let h3 = document.createElement('h3');
h3.textContent = '30DaysOfJavaScript Challenge';
h3.style.fontWeight = '400';
h3.style.fontSize = '20px';
h3.style.textDecoration = 'underline';
h3.style.textAlign = 'center';
h3.style.padding = '3px';
h3.style.margin = '0px';

container.appendChild(h3);

//date-time format
let h4 = document.createElement('h4');
h4.textContent = getDate();
h4.style.fontSize = '15px';
h4.style.padding = '6px';
h4.style.margin = 'auto';
h4.style.textAlign = 'center';
h4.style.width = '15%';
h4.style.fontWeight = '400';
h4.style.marginBottom = '5px';
//setInterval(function, 1000);
setInterval(() => {
    h4.style.backgroundColor = generateColor();
}, 1000);

container.appendChild(h4);

// ul
let list = document.createElement('ul');
list.style.listStyleType = 'none';
list.style.width = '80%';
list.style.margin = 'auto';

// let us do it  
asabenehChallenges2020.challenges.forEach(x => {
  let item = document.createElement('li');
  
  // innerHTML live :)     
  // 1   
  let titleSpan = document.createElement('span');
  let title = document.createTextNode(x.name);
  titleSpan.appendChild(title);

  // 2   
  let dropdown = document.createElement('details');
  let dropdownSpan = document.createElement('span');

  // modify detail   
  let summary = document.createElement('summary');
  summary.textContent = x.name.split(' ')[x.name.split(' ').length -1];
  summary.style.textAlign='center';
  // add the topics 
  let topics = document.createElement('ul');
  
  x.topics.forEach(i => {
    let item = document.createElement('li');
    item.textContent = i;
    
    topics.appendChild(item);
    
    // styling    
    item.style.padding='5px';
    item.style.width = '90%';
    item.style.marginTop ='3px';
    item.style.marginBottom = '3px';
  })
  // styling   
  topics.style.listStyleType = 'none';
  topics.style.width = '80%';
  topics.style.margin = 'auto';
  
  dropdownSpan.appendChild(dropdown);
  // 3 
 
  let statusSpan = document.createElement('span');
  let status = document.createTextNode(x.status);
//   statusSpan.style.textAlign='right'
  statusSpan.appendChild(status);
 
  // appends    
  item.appendChild(titleSpan);
  dropdown.appendChild(summary);
  dropdown.appendChild(topics);
  item.appendChild(dropdownSpan);
  item.appendChild(statusSpan);
  list.appendChild(item);

  // styling     
  item.style.border='1px blue solid'; 
  item.style.padding='5px';
  item.style.width = '90%';
  item.style.marginTop ='3px';
  item.style.marginBottom = '3px';
 

 
}) 

container.appendChild(list);


//author title
let authorname = document.createElement('h1');
authorname.textContent =  'Asabeneh Yetayeh'
authorname.style.fontWeight = '500';
authorname.style.fontSize = '30px';
authorname.style.textDecoration = 'none';
authorname.style.textAlign = 'center';
authorname.style.padding = '3px';
authorname.style.margin = '0px';

container.appendChild(authorname);

//sociallink
let i = document.createElement('i');
i.url= 'https://www.linkedin.com'
i.className="fa fa-linkedin-square";
i.style.paddingTop= '10px';
i.style.paddingLeft='597px';
i.style.fontSize = '30px';
i.style.width= '30px';
i.style.textAlign= 'center';
i.style.borderRadius= '50%'
container.appendChild(i);

let i2 = document.createElement('i');
i2.url= 'https://twitter.com'
i2.className="fa fa-twitter-square";
i2.style.paddingTop= '10px';
i2.style.paddingLeft='3px';
i2.style.fontSize = '30px';
i2.style.width= '30px';
i2.style.textAlign= 'center';
i2.style.borderRadius= '50%'
container.appendChild(i2);

let i3 = document.createElement('i');
i3.url= 'https://github.com'
i3.className="fa fa-github-square";
i3.style.paddingTop= '10px';
i3.style.paddingLeft='3px';
i3.style.fontSize = '30px';
i3.style.width= '30px';
i3.style.textAlign= 'center';
i3.style.borderRadius= '50%'
container.appendChild(i3);

//bio
let p=document.createElement('p');
p.textContent='I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
p.textAlign='center';
p.style.paddingTop='6px';
p.style.paddingLeft='205px';
p.style.paddingRight='232px';

container.appendChild(p);

//column
// let row=document.createElement('row');
// let column1=document.createElement('column');
// let h3=document.createElement('h3');
// h3.textContent='Titles';
// column1.appendChild(h3)
// column1.className=" col-md-4 "
// let column2=document.createElement('div.column');
// column2.className=" col-md-4 "
// let column3=document.createElement('div.column');
// column3.className=" col-md-4 "
// row.appendChild(column1);
// // row.appendChild(column2);
// // row.appendChild(column3);
// container.appendChild(row);    


let row=document.createElement('row');
let column1=document.createElement('column');
let ul=document.createElement('ul')
column1.appendChild(ul)
let li1=document.createElement('li');
li1.textContent='Educator'
let li2=document.createElement('li');
li2.textContent='Programmer'
let li3=document.createElement('li');
li3.textContent='Developer'
let li4=document.createElement('li');
li4.textContent='Motivator'
let li5=document.createElement('li');
li5.textContent='Content Creater'
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)
let column2=document.createElement('column');
let column3=document.createElement('column');
column1.textContent='Titles'
column2.textContent='Skills'
column3.textContent='Qualifications'
column1.style.border='1px #73a657 solid';
row.appendChild(column1);
row.appendChild(column2)
row.appendChild(column3)
container.appendChild(row); 



