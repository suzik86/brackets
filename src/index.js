module.exports = function check(str, bracketsConfig) {
  
    let stack = [];    
    
    let couples = bracketsConfig.reduce(function(prev, curr) {
      prev[curr[1]] = curr[0];
      return prev;
    }, {});

    let opens = Object.values(couples);

    for (var i = 0; i < str.length; i++) {
      let cur = str[i];
      let isClose = couples.hasOwnProperty(cur);
      let isOpen = opens.includes(cur);

      if (isOpen || isClose){
        stack.push(cur);        
      } 
      if (stack.length > 1 && isClose && couples[cur] == stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
      } 
    }

    return stack.length == 0;
  }
