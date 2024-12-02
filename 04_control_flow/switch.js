// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "jan"

// key = is the value which i want to check 

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        // break;
    case "march":
        console.log("March");
        // break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}

// if break; is not written of a case all the code of switch statement will run except default