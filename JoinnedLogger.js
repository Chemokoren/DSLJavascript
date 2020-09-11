function joinedLogger(level, sep) {
    var final_string="";
    msg = {level: 2, text: "foo"}
     return(function f() {
         for (var i = 0; i < arguments.length; i++) {
         }
         if (level > arguments[i].level) {
             var text_info = arguments[i].text;
             final_string += text_info + (sep)
         }
         return final_string;
     })


}

console.log(joinedLogger(8,';'))
