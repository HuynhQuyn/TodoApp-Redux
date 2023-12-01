import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useCallback, useState } from 'react';
import { useDispatch} from 'react-redux'
import { priorityChange, searchFilterChange, statusFilterChange } from '../../redux/actions';

const { Search } = Input;

function Filter() {
    const [searchText, setSearchText] = useState('')
    const [filterStatus, setFilterStatus] = useState('ALL')
    const [filterPriorities, setFilterPriorities] = useState([])


    const dispatch = useDispatch();

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        dispatch(searchFilterChange(e.target.value));
    }

    const handleStatusChange = e => {
        setFilterStatus(e.target.value)
        dispatch(statusFilterChange(e.target.value))
    }

    const handlePriorityChange = (e) => {
        setFilterPriorities(e)
        dispatch(priorityChange(e));
    }

    return (
        <Row style={{width: '100%', display:'flex'}}>
            <Col span={24}>
                <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
                    Search
                </Typography.Paragraph>
                <Search 
                    placeholder='input search text' 
                    value={searchText}
                    onChange={handleSearchTextChange}
                />
            </Col>
            <div style={{width:'100%'}}>
                <div style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>Filter By Status</div>
                <div style={{display:'flex'}}>
                    <input type="radio" value="ALL" onClick={handleStatusChange} checked={filterStatus === 'ALL'} /> ALL
                    <input style={{marginLeft: 14}} type="radio" value="Completed"  onClick={handleStatusChange} checked={filterStatus === 'Completed'}/> Completed
                    <input style={{marginLeft: 14}} type="radio" value="To do" onClick={handleStatusChange} checked={filterStatus === 'To do'}/> To do
                </div>
            </div>
            {/* <div style={{width:'100%'}}>
                <div style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>Filter By Priority</div>
                <Select style={{width: '100%'}} defaultValue="Hight" 
                    value={filterPriorities}
                    onChange={handlePriorityChange}
                >
                    <Select.Option style={{color:'##cf1322', backgroundColor:'#fff1f0', borderColor:'#ffa39e'}} value="high">High</Select.Option>
                    <Select.Option style={{color:'#0958d9', backgroundColor:'#e6f4ff', borderColor:'#91caff'}}value="medium">Medium</Select.Option>
                    <Select.Option style={{color:'white', backgroundColor:'gray'}} value="low">Low</Select.Option>
                </Select>
            </div> */}
            <div style={{ width: '100%',height:'2px',marginTop:'10px', backgroundColor: '#ebebeb', marginBottom:'20px'}}></div>
        </Row>
    )
}

export default Filter