import axios from "axios";

type type_data = {
  name : string;
  role : string;
  experience : string;
  location : string;
  skills : Array;
  projects : Array;
}

const User_data: type_data[] = [ 
 {
    "name" : "Arnav Shah",
    "role" : "Full-Stack Developer",
    "experience" : "3+ years of experience in web development",
    "location" : "Vadodara",
    "skills" : ["React" , "Node.js" , "SQL"],
    "projects" : ["Ananta-web" , "Project 2" , "Project 3"]
  },
  {
    "name" : "Nandish Mittal",
    "role" : "Game Developer",
    "experience" : "2+ experience with Unity engine",
    "location" : "Vadodara",
    "skills" : ["C#" , "Unity" , "C++"],
    "projects" : ["Snake-game","kitty-store","Sneak2sleep"]
  },
  {
    "name" : "Divy Puranik",
    "role" : "Cyber Security",
    "experience" : "1+ year experience" ,
    "location" : "vadodara" ,
    "skills" : ["KaliOS","ParrotOs"],
    "projects" : ["Project 1" , "Project 2" , "Project 3"]
  },
  {
    "name" : "Vaibhav Kumawat",
    "role" : "Full Stack Developer",
    "experience" : "2+ years of experience in web development",
    "location" : "Vadodara",
    "skills" : ["React" , "Node.js" , "SQL"],
    "projects" : ["Dev-Connect"]
  },
  {
    "name" : "",
    "role" : "",
    "experience" : "",
    "location" : "",
    "skills" : ["" , "" , ""],
    "projects" : [""]
  },
  {
    "name" : "",
    "role" : "",
    "experience" : "",
    "location" : "",
    "skills" : ["" , "" , ""],
    "projects" : [""]
  }
]

//Get data : 
export const getuser_data = async () => {
  const options = {
    method: 'GET',
    url: 'http://localhost:3001/api/users',
    headers: {'Content-Type': 'application/json'}
  };

  try{
    const response = await axios.request(options);
    return response.data;
  } catch(error) {
    console.error("Error getting users", error);
    return [];
  }
}

//Add data : 
export const adduser_data = (post: type_data) => {
  User_data.push(post);
}

//delete data : 
