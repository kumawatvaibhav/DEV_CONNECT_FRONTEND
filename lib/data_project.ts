type type_project = {
    title : string;
    d_name : string;
    description : string;
    tech : Array;
    time : string;
}

const Project_data : type_project[] = [
    {
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },
    {
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },
    {
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },
    {
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },{
        "title" : "",
        "d_name" : "",
        "description" : "",
        "tech" : ["","",""],
        "time" : ""
    },{
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