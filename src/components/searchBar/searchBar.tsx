import { AutoComplete, Input } from 'antd';
import { connect } from 'dva';
import { history } from 'umi';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

const { Search } = Input;

function SearchBar(this: any, props: any) {
  // user input value
  const [inputValue, setInputValue] = useState("");
  // list of auto complete course options
  const [courseList, setCourseList] = useState<readonly string[]>([]);
  // map from autocomplete course option to course code
  const [courseMap, setCourseMap] = useState(new Map());
  // the course code selected by user
  const [selectedCourseCode, setCourseCode] = useState("");

  function searchHandler(val: string) {
    axios
      .get(
        'https://capstone2022-342303.uw.r.appspot.com/course/search?query=' +
          val,
      )
      .then((Response) => {
        let fetched: any[] = Response.data.data;
        //本轮搜索的course_code - course_full_name对词典， 用以替换codeMp
        let currentMap = new Map();
        const results: string[] = fetched.map((val: any): string => {
          currentMap.set(val.course_full_name, val.course_code);
          return  val.course_full_name;
        });
        setCourseMap(currentMap);
        setCourseList(results);
      });
  }

  useEffect(() => {
    searchHandler(inputValue);
  },[inputValue]);

  function redirect(val: string): void {
    setCourseCode(courseMap.get(val))
    history.push('/courseInfo/detail?code=' + courseMap.get(val));
  }

  const searchBar = 
    <Paper
      component="form"
      sx={{display: 'flex', alignItems: 'center'}}
      style={{width: "100%"}}
    >
      <Autocomplete
        freeSolo
        fullWidth
        sx={{ p: '8px 1px 8px 0px'}}
        renderInput={(params) => (
          <TextField
            variant="standard"
            {...params}
            InputProps={{
              disableUnderline: true,
              style: {fontSize: '1.1rem'},
              ...params.InputProps,
              startAdornment: (
                <InputAdornment 
                  style={{marginLeft: 8}}
                  position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        )}
        placeholder="Search for UW courses e.g. MATH 124"
        value={selectedCourseCode}
        onChange={(event: any,newValue: string | null) => {
          if (newValue !== null) {
            redirect(newValue);
          }
        }}
        options={courseList}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
         />
    </Paper>;
  return searchBar;
}

const mapStateProps = (state: any) => {
  return {
    courseList: state.courseInfo.courseList,
    courseMap: state.courseInfo.courseMap,
  };
};

const actionCreator = {
  update: (payload: string[]) => {
    return {
      type: 'courseInfo/update',
      payload,
    };
  },
  updateCourseMap: (payload: Map<any, any>)=>{
    return {
      type: 'courseInfo/updateCourseMap',
      payload,
    }
  },
  updateCourseCode: (payload: string) => {
    return {
        type: 'courseInfo/updateCourseCode',
        payload,
    };
  }
};

export default connect(mapStateProps, actionCreator)(SearchBar);
