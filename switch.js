const dayOfWeek = "Monday";

if (dayOfWeek === "Wednesday" || dayOfWeek === "Thursday"){
    console.log("This is if testing")
}

switch(dayOfWeek){
    case 'Monday':
        console.log("Monday");
        break;
    case 'Tuesday':
        console.log("Tuesday");
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log("This is wednesday  and Thursday one");
        break;    
    default:
    console.log("Hello this is default")
}