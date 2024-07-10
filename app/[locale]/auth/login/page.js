'use client';

import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { data: session } = useSession();
  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    
    const res = await signIn('credentials', {
    
      username,
      password,
     
    });

  



  };
if(session){
  console.log(session)
return (
  <>
  <h1>Hello {session.user.data.firstName}  {session.user.data.username} {session.user.data.role}</h1>
  <button onClick={()=>signOut()}>SingOut</button>
  </>
)
}
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input className='bg-black'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
        className='bg-black'
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
