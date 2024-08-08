import React, { useState } from 'react'

export default function Prac2() {
    const [lists, setLists] = useState([]); // 글 리스트
    const [writer, setWriter] = useState(''); // 새로운 글 작성자
    const [title, setTitle] = useState('');  // 새로운 글 제목
    const [searchOption, setSearchOption] = useState('writer');  // 검색 옵션 관련 
    const [searchText, setSearchText] = useState(''); // 검색 내용
    const [filterText, setFilterText] = useState([]);  // 검색 결과 

    // 등록
    const addList = (e) => {
        e.preventDefault();

        if (writer.trim().length === 0 || title.trim().length === 0){
            return
        }

        const newLists = lists.concat({
            id: lists.length + 1,
            writer,
            title
        });

        setLists(newLists);
        setWriter('');
        setTitle('');
    };

    // 검색 

    const handleSearch = () => {
        if (searchText.trim().length === 0) return;

        const result = lists.filter((info) => {
            if (searchOption === 'writer') {
                return info.writer.includes(searchText);
            } else if (searchOption === 'title') {
                return info.title.includes(searchText);
            }
            return false;
        });
        
        setFilterText(result);
        setSearchText('');
    };

    const handleSearchAllList = () => [
        setFilterText(lists)
    ]

  return (
    <div>
        <form onSubmit={addList}>
            <fieldset>
                <label htmlFor="writer">작성자 : </label>
                <input 
                    type="text" 
                    id='writer' 
                    placeholder='작성자' 
                    value={writer}
                    onChange={(e) => {
                        setWriter(e.target.value)
                    }}
                /> &nbsp; &nbsp;

                <label htmlFor="title">제목 : </label>
                <input 
                    type="text" 
                    id='title' 
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <button type='submit' >작성</button>
            </fieldset>
        </form>
        <br />

        <div>
            <select 
                value={searchOption}
                onChange={(e) => { setSearchOption(e.target.value) }}
            >
                <option value="writer">작성자</option>
                <option value="title">제목</option>
            </select>
            <input 
                type="text" 
                placeholder='검색어'
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}

            />
            <button onClick={handleSearch} > 검색 </button>
            <button onClick={handleSearchAllList} > 전체 </button>
        </div>
        <br />


        <table border="1" cellSpacing="0" cellPadding="20">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                </tr>
            </thead>

            <tbody>
            {lists.map((list) => {
                return (
                    <tr key={list.id} >
                        <td>{list.id}</td>
                        <td>{list.title}</td>
                        <td>{list.writer}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        <br />

        <div>
            {filterText.length > 0 ? (<p>검색 결과</p>) : (<p>검색 결과가 없습니다.</p>) }
        </div>

        {filterText.length > 0 && (
            <table border="1" cellSpacing="0" cellPadding="20">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>

                <tbody>
                {filterText.map((list) => {
                    return (
                        <tr key={list.id} >
                            <td>{list.id}</td>
                            <td>{list.title}</td>
                            <td>{list.writer}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )}
    </div>
  )
}
