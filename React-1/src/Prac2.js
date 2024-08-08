import React, { useState } from 'react'

export default function Prac2() {

    const [infos, setInfos] = useState([])
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    // 등록
    const addInfo = (e) => {

        e.preventDefault()

        const newInfos = infos.concat({
            id: infos.length +1,
            name: userName,
            email: userEmail
        })

        setInfos(newInfos)
        setUserName('')
        setUserEmail('')
    };

    // 삭제 
    const deleteInfo = (targetId) => {

        const newInfos = infos.filter((info) => info.id !== targetId);

        setInfos(newInfos)
    };


    //키보드 이벤트 
    const handleKeyDown = (e) => {
        if (e.code === 'Enter') {
            addInfo(e)
        }
    }


  return (
    <div>
        <form onSubmit={addInfo}>
            <input 
                type="text" 
                name="userName" 
                placeholder='이름'
                value={userName} 
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <input 
                type="email" 
                name="userEmail" 
                placeholder='이메일'
                value={userEmail}
                onChange={(e) => {
                    setUserEmail(e.target.value)
                }}
                onKeyDown={ handleKeyDown }
            />
            <button type='submit'>등록</button>
        </form>

        <ul>
            {infos.map((info) => (
                <li 
                    key={info.id}
                    onDoubleClick={() => deleteInfo(info.id)}
                
                >
                    {info.name} : {info.email}
                </li>
            ))}
        </ul>

    </div>
  )
}
