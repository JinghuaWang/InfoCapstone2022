import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { purple } from '@mui/material/colors';

/**
 * 
 * @param props 
 * 课程推荐组件
 */
function Recommandation(props: any) {
  const initialContent: recommandationData = {
    gpa_booster: [],
    popular_courses: [],
    tech: {},
  };
  let [content, setContent] = useState(initialContent);

  useEffect(() => {
    axios
      .get('https://capstone2022-342303.uw.r.appspot.com/course/recommendation')
      .then((res) => {
        setContent(res.data.data);
      });
  }, []);

  const [value, setValue] = React.useState("GPA Booster");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ color: purple[50] }}
          textColor="inherit"
          indicatorColor="secondary"
          TabIndicatorProps={{style: {backgroundColor: purple[50] }}}
        >
          <Tab disableRipple value="GPA Booster" label="GPA Booster" />
          <Tab disableRipple value="Popular Courses" label="Popular Courses" />
          <Tab disableRipple value="Tech" label="Tech" />
        </Tabs>
        </Box>

      <TabPanel value="GPA Booster">Item One</TabPanel>
      <TabPanel value="Popular Courses">Item Two</TabPanel>
      <TabPanel value="Tech">Item Three</TabPanel>
    </TabContext>
    
    // <div>
    //   <Tabs
    //     defaultActiveKey="1"
    //     size="large"
    //     tabBarGutter={50}
    //     tabBarStyle={{ marginBottom: '2vw', color: 'white'}}
    //   >
    //     <TabPane tab="GPA Booster" key="1" style={{color: 'white', fontSize:'48'}}>
    //       <Rol courses={content.gpa_booster} />
    //     </TabPane>
    //     <TabPane tab="Popular Courses" key="2" style={{color: 'white', fontSize:'48'}}>
    //       <Rol courses={content.popular_courses} />
    //     </TabPane>
    //     <TabPane tab="Tech" key="3" style={{color: 'white', fontSize:'48'}}>
    //       <Rol courses={content.tech} />
    //     </TabPane>
    //   </Tabs>
    // </div>
  );
}
 

export default Recommandation;
