//1
  pList.forEach(x => {
     x.style.color='white';
     x.style.backgroundColor="aqua";
     x.style.fontSize='15px';
     x.style.fontFamily='Helvetica';
     x.style.border='dotted black'
  })
  //2
  let index = 0;
  for (let each of pList) {
    if (index % 2 === 0)
      each.style.color = 'green';
    else each.style.color = 'red';
  
    index++;
  }
  //3


  let a = 1;
for (let each of pList) {
  if (a == 1) {
    each.textContent = `${a}st Pargraph!`;
  } else if (a === 2) {
    each.textContent = `${a}nd Paragraph`;
  } else if (a == 3) {
    each.textContent = `${a}rd Pargraphs`;
  } else
    each.textContent = `${a}th Paragraph!`;

  each.setAttribute('id', `${a}-paragraph`);
  each.setAttribute('class', 'Paragraph');
  a++;
}