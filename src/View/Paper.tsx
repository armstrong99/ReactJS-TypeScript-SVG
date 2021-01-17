import React,{useReducer} from 'react';
import Shapes from '../Components/Shapes';
import { Load } from '../Types/Paper';
import './Style/paper.css'
 
 

 
interface IAllTravProps {
 }

export const AllTrav: React.FC<IAllTravProps> = () => {

  const store: any[] = [
    
  ] 

const storeReducer = (prevState:Array<any>, {action, load}:{action: string, load: Load} ) => {
      
  switch (action) {
      
      case 'add': return [...prevState, load]
      
      case 'from_input':
        
      if (load.nature === "update") {
              
          let { index, key, text } = load
               
          prevState[index][key] = text
                
          return [...prevState];
             
        }
        
        // eslint-disable-next-line
      case 'delete':
        if (load.nature === "del") {
          let { index } = load
          prevState.splice(index, 1)
          return [...prevState];
        }
               
            
        // eslint-disable-next-line
      default: return prevState;
      
          }
   }

  const [state, dispatch] = useReducer(storeReducer, store)


  
/**
 * Returns the number of a particular shape in the store
  * @param {string} type - The name of the shape.
  */
  let count = (name: string): number => state.filter(val => val.type.includes(name)).length 
  
 
     
/**
 * Populate the store with default values for each shape
  * @param {string} type - The name of the shape.
  */
  const handleDraw = (type: string):void => {
          switch (type) {
            case 'circle':

              dispatch({
                action: 'add',
                load: {
                  nature: "shape",
                  type: `Circle ${count('Circle')}`,
                  fill: 'limegreen',
                  left: 50,
                  radius: 40,
                  top: 50,
                }})
              
              break;
            case 'rect':
              dispatch({
                action: 'add',
                load: {
                  nature: "shape",
                  type: `Rectangle ${count('Rectangle')}`,
                  fill: 'cyan',
                  left: 50,
                  top: 50,
                  height: 200,
                  width: 300,
               }})
              
              break;
            case 'line':
              dispatch({
                action: 'add',
                load: {
                nature: "shape",
                type: `Line ${count('Line')}`,
                color: 'green',
                x1: 0,
                x2: 200,
                y1: 0,
                y2: 200,
                thickness: 2,
                 }})
              
              break;
          
            default:
              break;
          }
  }


/**
 * Takes values from input field to modify the shape dimensions.
 * @param {string} text - The value of the input field
 * @param {number} index - The index of the shape object on the store array
 * @param {string} key - The value of the actuall dimension we intend updating
 */
  const handleInput = (text: string, index: number, key: string): void => {

    dispatch({
       action: 'from_input',
       load: {
          text,
         index,
         key,
         nature: "update"
        }
     })
  }

  /**
 * Deletes a particular shape from the store array
  * @param {number} index - The index of the shape object on the store array
  */
  const handleDelete = (index:number):void => {
    dispatch({
      action: 'delete',
      load: {
        index,
        nature: "del"
        }
      })
  }

  return (
    <>
      
      {/* shape board component to display the shapes */}
      
      <Shapes state={state} />

      
      {/* Add new shapes with buttons to the board */}

      <section id="btnSec">
       <button onClick={():any => handleDraw('circle')}>
        Add Circle
      </button>
      <button onClick={():any => handleDraw('rect')}>
        Add Rectangele
      </button>
      <button onClick={():any => handleDraw('line')}>
        Add Line
      </button>
      </section>


      
      {/* Update the Shapes property from input field */}

      <section>
        <h3 style={{marginLeft: '4rem'}}>Shapes</h3>
        <section id="formShape">

        {
          state.map((val, index) => (
             <section id="shapesCont">
              
           
              <h5>{val.type}</h5>
               
              {
                Object.keys(val).map((key, i) => i !== 0 && i !== 1 ? 

                  <div>
                    <label> {key}: </label>
                    <input 
                    type='text' 
                    value={val[key]} 
                      onChange={({ target }) => handleInput(target.value, index, key)} />
                    
                   </div>

                  : <div></div>
                
                )
              }
              <button id="delBtn" onClick={():any => handleDelete(index)}>delete</button>

            </section>

           ))
        }
        </section>
      </section>

     </>
 
   );
};
 