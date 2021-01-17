import React from 'react'

export interface ShapesProps {
  state: any[]
}
 
const Shapes: React.FunctionComponent<ShapesProps> = ({state}) => {
  return ( 
    <>
     <section id="container">
        {state.map((val) => (
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
                stroke-width={"1"} 
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

       

      </>
   );
}
 
export default Shapes;