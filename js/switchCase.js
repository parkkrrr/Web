let role = "moderator";

switch (role) { 
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    case 'Admin':
        console.log("Administrator");
        break;

    default: 
        console.log('Unknown User');
}