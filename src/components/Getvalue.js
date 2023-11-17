import React,{useState} from 'react'

export default function Getvalue() {
  
  const func=()=>
  {

    const height = parseFloat(text1); // Convert text1 to a number
    const weight = parseFloat(text2); // Convert text2 to a number
    const bmi = (weight * 100 * 100) / (height * height);
      setfinalvalue(bmi.toFixed(2)); 
      console.log("bmi is working fine");
      
  }
  const clr=()=>
  {
      settext1('');
      settext2('');
  }
  const onchangetext1=(event)=>
  {
   
     settext1(event.target.value);
  }
  const onchangetext2=(event)=>
  {
     settext2(event.target.value);
  }
  const[text1,settext1]=useState('167');
  const[text2,settext2]=useState('58');
  const[finalvalue,setfinalvalue]=useState('');
  return (
    <div className='container my-3'>
    <div className='saeed'>
     <div className="input-group">
  <span className="input-group-text">height(cm) and weight(kg)</span>
  <input type="text" aria-label="First name" className="form-control" value={text1} onChange={onchangetext1}/>
  <input type="text" aria-label="Last name" className="form-control" value={text2}  onChange={onchangetext2}/>
</div>
</div>
<button type="button" className="btn btn-primary my-3"  onClick={func}  my-id ={3} >Calculate BMI</button>
<button type="button" className="btn btn-primary my-3 mx-2"  onClick={clr}  my-id ={3} >Clear</button>
<p>the value of bmi is {finalvalue}</p>
</div>
  )
}
