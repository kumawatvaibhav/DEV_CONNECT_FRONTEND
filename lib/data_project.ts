type type_project = {
    id : number;
    title : string;
    d_name : string;
    description : string;
    tech : Array;
    time : string;
}

const Project_data : type_project[] = [
    {
        id : 1,
        "title" : "DEV-CONNECT",
        "d_name" : "Team",
        "description" : "A Project Listing Website",
        "tech" : ["Nextjs","Nodejs","Tailwind css"],
        "time" : "1 month"
    },
    {
        id : 2,
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },
    {
        id : 3,
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },
    {
        id : 4,
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },
    {
        id : 5,
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },
    {
        id : 6,
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    }
]

//GEt data : 
export const getproject_data = () => Project_data;

//add data : 
export const addproject_data = (post : type_project) => {
    Project_data.push(post);
}

//Get data by Id : 
export const getproj_data_id = (id : number) => {
    const proj_data = Project_data.find(proj_data => proj_data.id === id);
    return proj_data;
}
