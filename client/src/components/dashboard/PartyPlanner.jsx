import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import { ADD_PARTY } from '../../utils/mutations'
import { DatePicker, TimePicker, Space, Form, Input, Checkbox, Button } from 'antd';
import dayjs from 'dayjs';

const PartyPlanner = ({ setPartyPlanning }) => {
    const [formData, setFormData] = useState({name: '', description: '', date: '', time: '', location: '', guestList: ''});
    const format = 'HH:mm A';
    const [addParty, {error}] = useMutation(ADD_PARTY);
  
    const onFinish = (values) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      console.log(formData)
    };
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    const disabledDate = (current) => {
      // Can not select days before today and today
      return current && current < dayjs().endOf('day');
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const addedParty = await addParty({
          variables: formData
        });
        
        const { token, user } = addedParty.data.addParty;
        Auth.login(token);
        
      } catch(err) {
        console.error(err)
      }
    }

    return (
    <>
        <div className="flex flex-col mx-auto p-4 border bg-white border-neutral-300 rounded-lg shadow sm:p-8 ">
        <h2 className="text-4xl my-2">Party Planner</h2>
        <Form
        name="basic"
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
    <Form.Item
      name="name"
      rules={[
        {
          required: true,
          message: "Please input your party's name!",
        },
      ]}
    >
      <h2 className="text-xl my-2">Name</h2>
      <Input />
    </Form.Item>
    <Form.Item
      name="description"
      rules={[
        {
          required: false,
          message: 'Please input your description!',
        },
      ]}
    >
      <h2 className="text-xl my-2">Description</h2>
      
      <Input.TextArea />
    </Form.Item>
    <h2 className="text-xl my-2">Date and Time</h2>

    <Space direction="horizontal">
    <Form.Item name="date">
        <DatePicker size={"large"} defaultValue={dayjs().add(1, 'day')}  disabledDate={disabledDate} onChange={onChange} />  
    </Form.Item>
    <Form.Item name="time">
        <TimePicker size={"large"} id="timepicker" name="time" minuteStep={15} defaultValue={dayjs('12:00 AM', format)} format={format} use12Hours={true} />
    </Form.Item>
    </Space>
    <h2 className="text-xl my-2">Location</h2>
    <Form.Item
      name="location"
      rules={[
        {
          required: false,
          message: 'Please input your location!',
        },
      ]}>
        <Input.Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>
    </>
    )
}

export default PartyPlanner;