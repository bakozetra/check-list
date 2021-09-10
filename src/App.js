import './App.css';
import { List } from './Component/list';
import { useContext, useState } from 'react';
import { Context } from './Context';
import { Search } from './Component/search';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
   text-align:center;
   margin: 0;
`
function App() {
  const { list } = useContext(Context)
  const [searchItem, setSearchItem] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked, "chek");
  const [checked, setChecked] = useState([]);

  let listOfPeople = list;
  let listIschecked = []
  console.log(listIschecked, "listIschecked ");
  const handleClick = (userId) => {
    let checkedRes = checked
    checkedRes[userId] = !checkedRes[userId];
    console.log(userId);
    if (checked !== []) {
      listIschecked.push(userId)
      console.log(listIschecked)
    } else {
      console.log("False");
    }
    setChecked(checkedRes);
    setIsChecked(!isChecked)

  }

  let sortListpeople = listOfPeople.sort((a, b) => {
    const latstNameA = a.last_name.toLowerCase()
    const lastNameB = b.last_name.toLowerCase()
    if (latstNameA < lastNameB) {
      return -1;
    }
    if (latstNameA > lastNameB) {
      return 1;
    }
  })
  const FilteringName = sortListpeople.filter(nam => {
    const nameTolowerCase = nam.last_name.toLowerCase() && nam.first_name.toLowerCase();
    return nameTolowerCase.includes(searchItem.toLocaleLowerCase())
  }
  )

  const MappingList = FilteringName.map(lis => {
    return <List
      key={lis.id}
      fistName={lis.first_name}
      lastName={lis.last_name}
      mail={lis.email}
      image={lis.avatar}
      checked={checked[lis.id]}
      onchange={() => handleClick(lis.id)}
    />
  })

  return (
    <div>
      <HeaderStyle>Contact</HeaderStyle>
      <Search
        onChange={(e) => setSearchItem(e.target.value)}
        placeholde={"Search"}>{searchItem}</Search>
      {MappingList}
    </div>
  );
}

export default App;
