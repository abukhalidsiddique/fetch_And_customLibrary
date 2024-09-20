const dataFetch= new asifHTTP;
const content=document.getElementById('lists');
const addToDo= document.getElementById('addTask');
const taskItem= document.getElementById('text');
const updateTask=document.getElementById('updateTask');
const deleteTask= document.getElementById('deleteTask');
 

const getUsers= () =>
{
   dataFetch.get('http://jsonplaceholder.typicode.com/posts')  
  .then((data)=>
    {
      console.log(data);
      let output='';
       
      data.forEach(post=>
        { output+=
            `            
              <li> ${post.title} </li>  
            `;
        })
        //  
        content.innerHTML=output;
      
    })
  .catch(err=>console.log(err)) 
}

 

const createToDo= ()=>
{
   console.log(taskItem.value);
   const formData= {
                       'userId':1,
                       'title':taskItem.value,
                       'completed': true
                   };
     
   dataFetch.post('http://jsonplaceholder.typicode.com/posts',formData)
   
        .then(data=>{console.log(data);})
        .catch(err=>{console.log(err);});
        taskItem.value='';
        getUsers();
   
}

const updateToDo= () =>
{ 
  console.log(taskItem.value);
  const updateData= {
    'userId':2,
    'title':taskItem.value,
    'completed': true
};

     dataFetch.update(`http://jsonplaceholder.typicode.com/posts/${4}`,updateData)
     .then(data=>{console.log(data);})
     .catch(err=>{console.log(err);})
     taskItem.value='';
        getUsers();
}

const deleteTodo= ( ) =>
  { 
       dataFetch.delete(`http://jsonplaceholder.typicode.com/posts/${7}`)
       .then(data=>{console.log(data);})
       .catch(err=>{console.log(err);});
        getUsers();
  }

  getUsers();
 
addToDo.addEventListener('click',createToDo);
updateTask.addEventListener('click',updateToDo)
deleteTask.addEventListener('click',deleteTodo);

 