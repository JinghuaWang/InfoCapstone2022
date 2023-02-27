import { history } from 'umi';
import { useEffect, useState } from 'react';
import styles from './courseInfo.css';
import { connect } from 'dva';
import NavBar from '@/components/navBar';
import axios from 'axios';
import { Tag, Menu } from 'antd';
import { AiFillGithub } from 'react-icons/ai';
import { Typography } from 'antd';
const { Title } = Typography;
//import loading from '@/assets/loading.gif'

/**
 * courseInfo页面最上边的那个显示课程信息的组件
 * @param props
 */
function headArea(props: any) {
  const { updateProfessor, updateCourseCode, courseCode } = props;
  const initialState = {
    tags: [],
    course_code: '',
    course_title: '',
    credit: '',
    description: '',
  };
  const [state, setState] = useState(initialState);
  const [currentKey, setCurrentKey] = useState('detail');

  useEffect(() => {
    let code: string | string[] | null = history.location.query
      ? history.location.query.code
      : '';
    axios
      .get(
        'https://capstone2022-342303.uw.r.appspot.com/course/info?course_code=' +
          code,
      )
      .then((Response) => {
        setState(Response.data.data);
        updateCourseCode(Response.data.data.course_code);
        updateProfessor(Response.data.data.professors);
      });
  }, [courseCode]);

  //把tags转换为标签组件
  const tags = !state.tags.length
    ? []
    : state.tags.map((val: string) => {
        return (
          <Tag color="#a78cf2" style={{ borderRadius: '20px', fontSize: '14px'}}>
            {val}
          </Tag>
        );
      });

  //点击tab时的回调, 如果目前的currentkey和被点击的tab的key不一样，则改变目前的key并发生跳转
  let clickHandler = (e: any) => {
    if (currentKey != e.key) {
      setCurrentKey(e.key);
      history.push(`/courseInfo/${e.key}?code=${courseCode}`);
    }
  };

  if (state.course_code.length) {
    return (
      <div className={styles.backGroundPage}>
        <div className={styles.navWrapper}>
          <NavBar setTab={setCurrentKey} />
        </div>
        <div className={styles.headArea}>
          {/* <Divider style={{ marginBottom: '-2px', marginTop: '12px'}} /> */}
          <Title level={3} style={{ padding: '30px 30px 0px' }}>
            {state.course_code} {state.course_title} (
            {state.credit == '' ? 'Na' : state.credit})
          </Title>
          <div style={{ padding: '0 30px 15px' }}>{tags}</div>
          <div style={{ width: '80%', marginBottom: '3vh', color: '#434343'}}>
            <p className={styles.courseDescribtion}>{state.description}</p>
          </div>
          <div style={{ borderRadius: '14px' }}>
            <Menu
              onClick={clickHandler}
              mode="horizontal"
              selectedKeys={[currentKey]}
              style={{ paddingLeft: '10px', borderRadius: '14px', fontSize: '18px', color:"#434343"}}
            >
              <Menu.Item key="detail">Course Overvie</Menu.Item>
              <Menu.Item key="QA">Discussion</Menu.Item>
            </Menu>
          </div>
        </div>
        <div className={styles.cardsContainer}>{props.children}</div>
        <div style={{ height: '5vh', width: '10vw', margin: '0 auto' }}>
          <AiFillGithub />
          <a
            style={{
              color: '#060016',
              paddingLeft: '5px',
              position: 'relative',
              top: '-2px',
            }}
            href="https://github.com/jorschac/InfoCapstone2022"
          >
            Visit our Github
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <div className={styles.loader}>
          <img
            style={{ width: '20vw', height: '30vh' }}
            src={require('@/assets/loading.gif')}
            alt="loading"
          />
          <div style={{fontSize:'xx-large', color:'white', position:'relative', left:'9%'}}>Loading...</div>
        </div>
      </div>
    );
  }
}

const mapStateProps = (state: any) => {
  return {
    professors: state.courseInfo.professors,
    courseCode: state.courseInfo.courseCode,
  };
};

const actionCreator = {
  updateProfessor: (payload: string[]) => {
    return {
      type: 'courseInfo/updateProfessor',
      payload,
    };
  },
  updateCourseCode: (payload: string) => {
    return {
      type: 'courseInfo/updateCourseCode',
      payload,
    };
  },
};

export default connect(mapStateProps, actionCreator)(headArea);
