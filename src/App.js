import './App.css';
import { List } from './Component/list';
import { useContext, useState } from 'react';
import { Context } from './Context';
import { Search } from './Component/search';

function App() {
  const { list } = useContext(Context)
  const [searchItem, setSearchItem] = useState('')
  const MappingList = list.map(lis => {
    const names = [lis.first_name, lis.last_name]
    return <List
      name={names}
      mail={lis.email}
      image={lis.avatar}
    />
  })

  return (
    <div>
      {/* <Search
        onChange={() => { }}
        text={"Search"}
      /> */}
      {MappingList}
    </div>
  );
}

export default App;
