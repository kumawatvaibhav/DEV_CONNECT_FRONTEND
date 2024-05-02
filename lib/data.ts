type type_data = {
  id : number;
  name : string;
  role : string;
  experience : string;
  location : string;
  skills : Array;
  projects : Array;
}

const User_data: type_data[] = [ 
 {
    "id" : 1,
    "name" : "Arnav Shah",
    "role" : "Full-Stack Developer",
    "experience" : "3+ years of experience in web development",
    "location" : "Vadodara",
    "skills" : ["React" , "Node.js" , "SQL"],
    "projects" : ["Ananta-web" , "Project 2" , "Project 3"]
  },
  {
    "id" : 2,
    "name" : "Nandish Mittal",
    "role" : "Game Developer",
    "experience" : "2+ experience with Unity engine",
    "location" : "Vadodara",
    "skills" : ["C#" , "Unity" , "C++"],
    "projects" : ["Snake-game","kitty-store","Sneak2sleep"]
  },
  {
    "id" : 3,
    "name" : "Divy Puranik",
    "role" : "Cyber Security",
    "experience" : "1+ year experience" ,
    "location" : "vadodara" ,
    "skills" : ["KaliOS","ParrotOs"],
    "projects" : ["Project 1" , "Project 2" , "Project 3"]
  },
  {
    "id" : 4,
    "name" : "Vaibhav Kumawat",
    "role" : "Full Stack Developer",
    "experience" : "2+ years of experience in web development",
    "location" : "Vadodara",
    "skills" : ["React" , "Node.js" , "SQL"],
    "projects" : ["Dev-Connect"]
  },
  {
    "id" : 5,
    "name" : "",
    "role" : "",
    "experience" : "",
    "location" : "",
    "skills" : ["" , "" , ""],
    "projects" : [""]
  },
  {
    "id" : 6,
    "name" : "",
    "role" : "",
    "experience" : "",
    "location" : "",
    "skills" : ["" , "" , ""],
    "projects" : [""]
  }
]

//Get data : 
export const getuser_data = () => User_data;

//Add data : 
export const adduser_data = (post: type_data) => {
  User_data.push(post);
}

//Get data by id : 
export const getuser_data_id = (id : number) => {
  const User_id_data = User_data.find(User_id_data => User_id_data.id === id);
  return User_id_data;
}

//delete data : 
