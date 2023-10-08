  .button {
      margin-left: 20px;
    }
    .big {
      font-size: xx-large;
    }
    .bordered {
      outline: 3px solid skyblue;
    }
    label {
      top: -1px;
      vertical-align: bottom;  import React from "react";


  export default function ToDoList( ) {
      const [todo, setTodo] = React.useState(""),
            [list, setList] = React.useState([]);
      
      return (
            <div id="list">
                  <h1 class="marginLeft:auto"> 2-do list</h1> 
          <input id="todo"
              value={todo}
              placeholder={"Enter task"}
              onInput={(evt) => setTodo( evt.target.value )}
              />
           <div id="buttons">
            <button id="add"
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
            <button id="del" 
              onClick={() => {
                  let tlist=list.filter((v)=>v.completed!="completed");
                  tlist.map((v) => { const i = tlist.indexOf(v); tlist[i].id = i + 1;});
                  setList(tlist);
              }}
              >
              delete all completed tasks
            </button>
            </div>
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
    
    }
    input[type="checkbox"] {
      transform: scale(1.2);
      background-color: red;
      vertical-align: bottom;
      
    }
    
    label.completed {
      text-decoration: line-through;
    }
    
    button.close {
      height: 15px;
      vertical-align: bottom;
      box-sizing: content-box;
    }
    fieldset {
      display: inline;
    }
    
    header ul{
      display: flex;  
      list-style-type: none;
    }

    header ul li{
      padding-right: 20px;
    }
@media (max-width: 768px) {
  body{
    background-image: url('../Public/Screenshot\ 2023-10-08\ 213440.png'); 
    background-size:  cover;                
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    
    #list{
      color:black;
      margin-top:3%
    }
       
      #todo{
        width: 60%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing:border-box
      }
      #buttons{
        display: inline-block;
        margin-top: 10px;
      }
      #add
        {
          padding: 10px 20px;
          background-color: #007BFF;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor:crosshair;
          }
          #del
          {
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor:crosshair;
            margin-left: 10px;
          }
      
  }}

@media (min-width: 769px) {
  body{
    background-image: url('../Public/pexels-content-pixie-2736499\ \(1\).jpg'); 
    background-size:  cover;                
    background-repeat: no-repeat; 
    background-attachment: fixed; }

    #list{
      color:black;
      margin-left:30%;
      margin-top:3%
      }
       
       #todo{
        width: 30%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing:border-box
          }
          #buttons{
            display: inline-block;
          }

          #add
          {
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor:crosshair;
            margin: 10px;
            }
        #del
        {
          padding: 10px 20px;
          background-color: #007BFF;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor:crosshair;
        }
       
      }
      
