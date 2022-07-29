// 64. Como se Comunican las funciones

startApp();

function startApp() {
    secondFunction();
}

function secondFunction() {
    console.log('From second function');
    authenticateUser('Rommel');
}

function authenticateUser(user) {
    console.log('Authenticating user, please wait...');
    console.log(`Successfully Authenticated User: ${user}`);
}