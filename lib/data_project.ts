import axios from "axios";

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
export const getUserData = async (userId) => {
    const options = {
        method: 'GET',
        url: `http://localhost:3001/api/users/${userId}`,
        headers: {'Content-Type': 'application/json'}
        
      };
      try {
        const response = await axios.request(options);
        return  response.data?.[0];
      } catch (error) {
        console.error("COuldnt fetch user", error);
        return [];
      }
}

// const extractOwnerProject = async (projects) => {
//     const userId = sessionStorage.getItem('userId');
//     return projects?.filter?.(() => {
//         if(projects?.ownerId?._id == userId) return true;
//         projects?.collaboratorIds?.map?.((project) => {
//             if(project?._id == userId) return true;
//         }) 
//         return false;
//     })
// }
//GEt data : 
export const getproject_data = async () => {
    const options = {
        method: 'GET',
        url: `http://localhost:3001/api/project`,
        headers: {'Content-Type': 'application/json'}
    };
    try {
        const response = await axios.request(options);
        const projects = response.data;
        const userId = sessionStorage.getItem('userId');
        const newProjects =  projects?.filter?.((pjt) => {
            if(pjt?.ownerId?._id == userId) return true;
            let isCollab = false;
            pjt?.collaboratorIds?.map?.((project) => {
                if(project?._id == userId) isCollab =  true;
            }) 
            return isCollab === true;
        })
        return newProjects;
        // const data =  await  extractOwnerProject(response.data) ?? [];
        // return data;
    } catch (error) {
        console.error("COuldnt fetch user", error);
        return [];
    }
};

//add data : 
export const addproject_data = (post : type_project) => {
    Project_data.push(post);
}

//Get data by Id : 
export const getproj_data_id = (id : number) => {
    const proj_data = Project_data.find(proj_data => proj_data.id === id);
    return proj_data;
}
