import React,{useReducer} from 'react';
import './Style/paper.css'
 

 
interface IAllTravProps {
 }

export const AllTrav: React.FC<IAllTravProps> = () => {

  const store:(string | number)[] = [
    
  ] 

  interface Data {
    action: string,
    load: any 
  }
  
 
   

 
  const storeReducer = (prevState:Array<any>, data: Data ) => {
    let type: string = data.action
    let { index, text, key } = data.load

    
    
          switch (type) {
            case 'add': return [...prevState, data.load]
            case 'from_input': prevState[index][key] = text

              return [...prevState]
            case 'delete': prevState.splice(index, 1)

              return [...prevState]
               
             
          
            default: return prevState
          }
   }

  const [state, dispatch] = useReducer(storeReducer, store)

  let x:number = state.filter(val => val.type.includes('Circle')).length 
  let y: number = state.filter(val => val.type.includes('Rectangle')).length 
  let z:number = state.filter(val => val.type.includes('Line')).length 

  const handleDraw = (type: string):void => {
          switch (type) {
            case 'circle':

              dispatch({
                action: 'add', load: {
                  type: `Circle ${x}`,
                  fill: 'purple',
                  left: 50,
                  radius: 40,
                  top: 50,
                
              }})
              
              break;
            case 'rect':
              dispatch({
                action: 'add', load: {
                  type: `Rectangle ${y}`,
                  fill: 'orange',
                  left: 50,
                  top: 50,
                  height: 200,
                  width: 300,
                
              }})
              
              break;
            case 'line':
              dispatch({
              action: 'add', load: {
                type: `Line ${z}`,
                x1: 0,
                x2: 200,
                y1: 0,
                y2: 200,
                thickness: 2,
                color: 'green'
                 
              
            }})
              
              break;
          
            default:
              break;
          }
  }

   const handleInput = (text:string,index:number, key:string):void => {
     dispatch({
       action: 'from_input',
       load: {
          text,
         index,
         key
       }
     })
  }

  const handleDelete = (index:number) => {
    dispatch({
      action: 'delete',
      load: {
        index,
       }
      })
  }
  return (
    <>
      <section id="container">
        {state.map(val => (
          <section>

            <svg 
            height={val.height} 
            width={val.width}>
              {
                val.type.includes('Circle') ?
              
                <circle 
                cx={val.left} 
                cy={val.top} 
                r={val.radius} 
                stroke={"black"} 
                stroke-width={"3"} 
                fill={val.fill} />
                
                  :
                  val.type.includes('Rectangle') ? 
                <rect 
                width={val.width} 
                height={val.height}
                fill = {val.fill} 
                stroke-width = {'1'}  
                stroke = {'rgb(0,0,0)'} />
                  :
                  <line 
                  x1={val.x1}
                  y1={val.y1}
                  x2={val.x2} 
                  y2={val.y2} 
                  stroke={val.color}
                  stroke-width={val.thickness} />
            }
                </svg>
                
          </section>
        ))}

        
          
      </section> 

      

      
      <section>
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


      <section>
              <h3>Shapes</h3>
        {
          state.map((val, i) => (
             <section id="shapesCont">
              
           
              <h5>{val.type} </h5>
              
              {
                Object.keys(val).map((key, i) => i !== 0 ? 

                  <div>
                    <label> {key} </label>
                    <input 
                    type='text' 
                    value={val[key]} 
                      onChange={({ target }) => handleInput(target.value, i, key)} />
                    
                    
                  </div>

                  : <div></div>
                
                )
              }
              <span id="delBtn" onClick={():void => handleDelete(i)}>delete</span>
              <hr></hr>
             </section>

            
            

          ))
        }
      </section>

         

    </>
  );
};
 