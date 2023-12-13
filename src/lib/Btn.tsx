const TabBtn = ({idx, title, activeFlag, changeTab} : {idx: number, title: string, activeFlag: boolean, changeTab: (idx: number)=> void}) => {    
	return (
      <>
        { activeFlag ? (<div className="active">{title}</div>) : (<div onClick={() => changeTab(idx)}>{title}</div>)
        }
      </>
    )
};

export default TabBtn;