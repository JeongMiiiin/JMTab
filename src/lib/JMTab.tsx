import {useState} from 'react';
import TabBtn from "./Btn";

export type TabType = {
  title : string;
  contents : JSX.Element;
}

const Tab = ({initIdx, TabList} : {initIdx: number, TabList: TabType[]}) => {   
  const [tabIdx, setTabIdx] = useState(initIdx);
  let Content = TabList[tabIdx].contents;
  const changeIdx = (idx: number) => {
    Content = TabList[idx].contents;
    setTabIdx(() => idx);
  }

  const btnList = [] as string[];
  for(let i=0; i < TabList.length; i++){
    btnList.push(TabList[i].title);
  }

	return (
    <div>
      <div>
        {btnList.map((item, index) => (
            <TabBtn key={index} idx={index} title={item} activeFlag={tabIdx == index} changeTab={changeIdx} />
          ))}
      </div>
      <div>
        {Content}
      </div>
    </div>
    )
};

export default Tab;