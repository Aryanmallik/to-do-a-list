import React from "react";


export default function ToDoList( ) {
    const [todo, setTodo] = React.useState(""),
          [list, setList] = React.useState([]);
     
    return (
          <div style={{color:'black',marginLeft:'30%', marginTop:'15%'}}>
                <h1 class="marginLeft:auto"> to-do list</h1> 
         <input style={{width: '400px',padding: '10px',border: '1px solid #ccc',borderradius: '4px',boxsizing:' border-box'}}
            value={todo}
            placeholder={"Enter task"}
            onInput={(evt) => setTodo( evt.target.value )}
            />
          <button style={{padding: '10px 20px',backgroundColor: '#007BFF',color: '#fff',border: 'none',borderradius: '5px',cursor: 'pointer', margin:10}}
          onClick={() => {
              const nextId = list.length + 1;
              if (list.filter((v) => v.value == todo).length == 0) {
                  list.push({ value: todo, id: nextId,completed:"" });
                  setList(list);
                  setTodo("");
              } else alert("value already exists");
            }}
            >
            add
          </button>
          <button style={{padding: '10px 20px',backgroundColor: '#007BFF',color: '#fff',border: 'none',borderradius: '5px',cursor: 'pointer', margin:10}}
            onClick={() => {
                 let tlist=list.filter((v)=>v.completed!="completed");
                 tlist.map((v) => { const i = tlist.indexOf(v); tlist[i].id = i + 1;});
                 setList(tlist);
            }}
            >
            delete all completed tasks
          </button>
            <table>
              {list.map(({ id, value, completed }) => (
                <tr> <td> {" "} <label> {id}. </label>  </td>
                     <td> {" "} <label className={completed}>{value} </label>{" "} </td>
                     <td> {" "} <input type="checkbox" title="complete" value={value}
                                       onChange={(evt) => {
                                          let tlist=list.slice();
                                          let index= tlist.indexOf(tlist.filter((v) => v.value == evt.target.value)[0]);
                                          if (tlist[index].completed=="completed") {tlist[index].completed=""}else{tlist[index].completed="completed"}; 
                                          setList(tlist);                                       
                                }} /> </td>
                     <td> <button class="close" title="delete" type="button"  value={value}
                                  onClick={(evt) => 
                                           { 
                                             let tlist=list.filter((v) => v.value != evt.target.value);
                                             tlist.map((v) => { const i = tlist.indexOf(v); tlist[i].id = i + 1;});
                                             setList(tlist);
                                           }}
                                  >🗑️ </button> </td>
                 </tr>
              ))}
            </table>
        </div>
        );
    }
  
