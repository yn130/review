import React, { useState, useRef } from 'react'

export default function Prac2() {
    const [lists, setLists] = useState([]); // 글 리스트
    const [writer, setWriter] = useState(''); // 새로운 글 작성자
    const [title, setTitle] = useState('');  // 새로운 글 제목

    // ref 추가 
    const inputWriterRef = useRef();
    const inputTitleRef = useRef();

    // 등록
    const addList = (e) => {
        e.preventDefault();

        if (writer.trim().length === 0){
            inputWriterRef.current.focus()
            return
        }
        if (title.trim().length === 0){
            inputTitleRef.current.focus()
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
        inputWriterRef.current.focus()
    };

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
                    ref={inputWriterRef}
                /> &nbsp; &nbsp;

                <label htmlFor="title">제목 : </label>
                <input 
                    type="text" 
                    id='title' 
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    ref={inputTitleRef}
                />
                <button type='submit' >작성</button>
                <br />
                <br />

                <table border="1" cellPadding="10">
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
            </fieldset>
        </form>
    </div>
  )
}
