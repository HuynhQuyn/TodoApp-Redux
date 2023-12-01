import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
  red: '#fff1f0',
  blue: '#e6f4ff',
};

export default function Todo({ name, priority ,completed}) {
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div>
        <div 
            style={{display:'flex', justifyContent: 'space-between', cursor: 'pointer', marginBottom: '10px',
            ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}) 
        }}

        >
            <label checked={checked}>
                <input type='checkbox' onChange={toggleCheckbox}></input>
                {name}
            </label>
            <span style={{color:priorityColorMapping[priority]}}>{priority}</span>
        </div>
        
    </div>
  
  );
}
