
import './App.css';
import React, {useState} from 'react';
import * as XLSX from 'xlsx'
import pic from './download.jpg'

function App() {
  const [emplyoeeData, setEmplyoeeData]=useState(null)
  const [paySlipData, setPaySlipData]=useState([])
  
  const handleFileUpload=(e)=> {
    
    const file=e.target.files[0]
    if (file) {
      const reader= new FileReader()
      reader.onload=(e)=>{
        const data=e.target.result
        const workbook=XLSX.read(data, {type: 'array'})
        const sheetName=workbook.SheetNames[0]
        const sheet=workbook.Sheets[sheetName]
        const excelData=XLSX.utils.sheet_to_json(sheet, {header: 1})
        setEmplyoeeData(excelData)
        
      }
      reader.readAsArrayBuffer(file)
      
    }
    console.log(emplyoeeData)
  }
  
  const getData=()=>{
    setPaySlipData(emplyoeeData[1])
    console.log(paySlipData[1])
  }
  
  return (
    <div className="App">
      
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      
      <button onClick={getData}>submit</button>
      <div className='main'>
      <div className='main-header'>
        <img src={pic} width="70px"/>
        <span>
          <h1>Mantra Technologies Pvt Ltd</h1>
          <p>1st and 2nd Floor, Vertex Corporate Building, Jubilee Enclave, HITEX Madhapur, Hyderabad, Telangana 500081. P:(040)29800028</p>
          <h2>Pay Slip for the month of July</h2>
        </span>
      </div>
      <div className='details-block'>
        <div className='details-box'>
          <div className='blocks'>
          <p>Name : </p>
          <p>JoinDate : </p>
          <p>Designation : </p>
          <p>Dapartment : </p>
          <p>Location : </p>
          <p>Effective Working Days : </p>
          <p>Days in Month : </p>
          </div>
          <div className='blocks'> 
          <p className='employee-details'>{paySlipData[1]} ({paySlipData[0]})</p>
          <p className='employee-details'>{paySlipData[2]}</p>
          <p className='employee-details'>Developer</p>
          <p className='employee-details'>Engineering</p>
          <p className='employee-details'>Hyderabad</p>
          <p className='employee-details'>{paySlipData[7]}</p>
          <p className='employee-details'>{paySlipData[5]}</p>
          </div>
          
        </div>
        <div className='details-box'>
          <div className='blocks'>
          <p>Bank Name : </p>
          <p>Bank Account Number : </p>
          <p>PF Number : </p>
          <p>PF UAN Number : </p>
          <p>ESI Number : </p>
          <p>PAN Number : </p>
          <p>LOP : </p>
          </div>
          <div className='blocks'>
          <p className='employee-details'>XYZ Bank</p>
          <p className='employee-details'>xxxxx123</p>
          <p className='employee-details'>123xxxx</p>
          <p className='employee-details'>123xxxxx</p>
          <p className='employee-details'>xxx</p>
          <p className='employee-details'>ABCxxxxx</p>
          <p className='employee-details'>{paySlipData[6]}</p>
          </div>
          
        </div>
        <div>

        </div>
      </div>
      <div className='details-block'>
        <div className='details-box'>
          <div className='blocks'>
          <p>Earnigs </p>
          </div>
          <div className='blocks'> 
          <p className='actual-t'>Actual</p>
          </div>
          
        </div>
        <div className='details-box'>
          <div className='blocks'>
          <p>Deductions</p>
          </div>
          <div className='blocks'>
          <p className='actual-t'>Actual</p>
          </div>
          
        </div>
        <div>

        </div>
      </div>
      <div className='details-block'>
        <div className='details-box'>
          <div className='blocks'>
          <p>Basic </p>
          <p>HRA</p>
          <p>MEDICALALLOWANCE</p>
          <p>TRANSPORTALLOWANCE</p>
          <p>SPECIALALLOWANCE</p>
          </div>
          <div className='blocks'> 
          <p className='actual-amt'>{paySlipData[9]}</p>
          <p className='actual-amt'>{paySlipData[11]}</p>
          <p className='actual-amt'>{paySlipData[12]}</p>
          <p className='actual-amt'>{paySlipData[13]}</p>
          <p className='actual-amt'>{paySlipData[14]}</p>
          </div>
          
        </div>
        <div className='details-box'>
          <div className='blocks'>
          <p>PF </p>
          <p>Prof Tax</p>
          
          </div>
          <div className='blocks'> 
          <p className='actual-amt'>{paySlipData[20]}</p>
          <p className='actual-amt'>{paySlipData[23]}</p>
        
          </div>
          
        </div>
        
      </div>
      <div className='details-block'>
        <div className='details-box'>
          <div className='blocks'>
          <p>Total Earnigs: INR {paySlipData[19]} </p>
          </div>
          
        </div>
        <div className='details-box'>
          <div className='blocks'>
          <p>Total Deductions: INR {paySlipData[24]}</p>
          
          </div>
          
        </div>
        
      </div>
      <div className='details-box'>
          <div className='blocks'>
          <p>Net Pay for the month (Total Earnigs - Total Deductions) : {paySlipData[25]} </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
