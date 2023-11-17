import React ,{useState}from 'react'
export default function Acco() {
const func=()=>
{
    if(mode==='Dark Mode')
    {
        setmode('Light Mode')
    }
    else
    {
        setmode('Dark Mode')
    }
    if(mystyle.color==='black' && mybutton.color==='white')
    {
        console.log('if wla part activate ho gya')
         setmystyle({
            color :'white',
        backgroundColor :'black'
         })
         setmybutton(
            {
                color :'black',
                backgroundColor :'white'
            }
            )      
      }
      else
      {
            console.log('else wla part activate ho gya')
            setmystyle({
            color :'black',
            backgroundColor :'white'
            })
             setmybutton(
                {
                    color :'white',
                    backgroundColor :'black'
                }
                )      
      }     
    }
const[mystyle,setmystyle]=useState({
     color:'black',
     backgroundColor :'white'
}
);
 const[mybutton,setmybutton]=useState(
    {
        color :'white',
        backgroundColor :'black'
    }
 )   
const[mode,setmode]=useState('Dark Mode')
  return (
    <>
      <div className="accordion my-id =3" id="accordionExample"  >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
        About Body Mass Index
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        <strong></strong> Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height 
        in meters (or feet). A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems,
         but it does not diagnose the body fatness or health of an individual.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        Losing Weight
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        <strong></strong> Healthy weight isn’t about following a diet or program. Instead, it involves a lifestyle with healthy eating patterns, regular physical activity, and stress management.
People with gradual, steady weight loss (about 1 to 2 pounds per week) are more likely to keep the weight off than people who lose weight quickly.
Sleep, age, genetics, diseases, medications, and environments may also contribute to weight management. If you are concerned about your weight or have questions about your medications, talk with your health care provider.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>Health Effects of Overweight
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        <strong></strong>
Food Assistance and Food Systems Resources

People who have overweight or obesity*, compared to those with healthy weight, are at increased risk for many serious diseases and health conditions. These include:1,2,3

Photo: Woman standing on a scale
All-causes of death (mortality).
High blood pressure (hypertension).
High LDL cholesterol, low HDL cholesterol, or high levels of triglycerides (dyslipidemia).
Type 2 diabetes.
Coronary heart disease.
Stroke.
Gallbladder disease.
Osteoarthritis (a breakdown of cartilage and bone within a joint).
Sleep apnea and breathing problems.
Many types of cancer.
Low quality of life.
Mental illness such as clinical depression, anxiety, and other mental disorders4,5.
Body pain and difficulty with physical functioning6.
*Overweight is defined as a body mass index (BMI) of 25 or higher. Obesity is defined as a BMI of 30 or higher.
      </div>
    </div>
  </div>
</div>
<button type="button" className="btn btn-secondary my-id=3" style={mybutton} onClick={func}>{mode}</button>
</>
  )
}
