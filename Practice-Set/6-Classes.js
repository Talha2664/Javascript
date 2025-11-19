// Create a class user with two properties it has also a method called viewdata()

class user{
    constructor(name,email){
        this.name = name;
        this.email = email
    }
    viewdata(){
        console.log(`the user name is ${this.name} and email is ${this.email}`);
        
    }
}
// create new admin class and add new method in it
class admin extends user {
    editdata(newName, newEmail){
    this.name = newName;
    this.email = newEmail;
    console.log("Data updated successfully!");
    }
}

let user1 = new admin("talha","talhamughal02148@gmail.com");
user1.viewdata()

