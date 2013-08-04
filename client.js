
var hello = "hello\n\
what's up\n\
"

function inArray(a){
  var o = {};
  for(var i=0;i<a.length;i++){
    o[a[i]]='';
  }
  return o;
}

if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}

// Runs a lithum script, where the script is passed as a string to main()
function main(file){
  
  console.log(">>> import this");
  console.log("Beautiful is better than ugly.");
  console.log("Explicit is better than implicit.");
  console.log("Simple is better than complex.");
  console.log("Complex is better than complicated.");
  console.log("Flat is better than nested.");
  console.log("Sparse is better than dense.");
  console.log("Readability counts.");
  console.log("Special cases aren't special enough to break the rules.");
  console.log("Although practicality beats purity.");
  console.log("Errors should never pass silently.");
  console.log("Unless explicitly silenced.");
  console.log("In the face of ambiguity, refuse the temptation to guess.");
  console.log("There should be one -- and preferably only one -- obvious way to do it.");
  console.log("Although that way may not be obvious at first unless you're Dutch.");
  console.log("Now is better than never.");
  console.log("Although never is often better than *right* now.");
  console.log("If the implementation is hard to explain, it's a bad idea.");
  console.log("If the implementation is easy to explain, it may be a good idea.");
  console.log("Namespaces are one honking great idea -- let's do more of those!");
  
  // Spit the file into lines.
  var lines = file.split("\n\
");
  var variables = {
    π : 3.141592653589,
    e : 2.718281828459,
    c : 299792458,
    atm : 101325
  };
  
  // A for loop that goes through each line.
  var length = lines.length;
  for(i = 0; i < length; i++){
    
    // This the line we're running right now.
    var line = lines[i];
    
    // If there's no trimRight function, we'll cut any white space to the right 
    // out of the line.
    if(!String.protoype.trimRight){
      var a = line.length;
      while(line.charAt(a)==" "){
        a--;
      }
      line = line.slice(0,a);
      
    // Otherwise, use the trimRight function.
    }else{
      line = line.trimRight;
    }
    
    // If the line of code has been spreadout over two or more lines, add them 
    // to this one so that we can execute them as one.
    while(line.charAt(a) == "↵"){
      i++;
      line = line + lines[i].trim();
      
      // If there's no trimRight function, we'll cut any white space to the 
      // right out of the line.
      if(!String.protoype.trimRight){
        var a = line.length;
        while(line.charAt(a)==" "){
          a--;
        }
        line = line.slice(0,a);
      
        // Otherwise, use the trimRight function.
      }else{
        line = line.trimRight();
      }
    }
    
    //Split the line into individual characters that can each be processed.
    var chars = line.split("");
    
    // Initialise a variable for 
    var word,
        sofar,
        code;
    for(i = 0; i < chars.length; i++){
      var token = chars[i];
      
      // Logic for the token we now have.
      switch(token){
        
        // In the case of a space.
        case " ":
          
          // Time to check and see which word we just finished.
          switch(word){
            case "for":
              break;
          }
          break;
        case '"':
          break;
        case "(":
          switch(word){
            
          }
          break;
        case ")":
          break;
        case "#":
          break;
        case ",":
          break;
        case "=":
          break;
        default:
          
          break;
         
      }
      
      sofar += token;
    }
  word = null,
  sofar = null;
  }
}

