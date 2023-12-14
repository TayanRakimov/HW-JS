// const user = [
//     {name: 'Rakimov', age:85},
//     {name: 'Tayan', age:29},
//     {name: 'Dosuevich', age: 60}
// ]
// const info = user.map(item =>  item.name );
// console.log(info); 


const finalball = (exam, projects) => {
    if (exam > 90 && projects >10) { return 99;}
    else if (exam > 75 && projects > 5 ) { return 90;}
    else if (exam > 50 && projects > 2 ) { return 75;}
    else if (exam > 30 && projects > 1 ) { return 50;}
    else { return 0;}
  }
  console.log(finalball(99, 11));
  console.log(finalball(85, 8));
  console.log(finalball(49, 4));
  
 