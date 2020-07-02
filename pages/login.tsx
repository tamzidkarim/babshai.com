import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { AuthContext } from '../contexts/authContext';
import { useContext } from 'react';
import redirect from '../lib/redirect';

const inputStyle =
  'block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-red-500';

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm<any>();
  const { setAuth, setUser } = useContext(AuthContext);

  async function handleLogin(data) {
    const resp = await fetch('http://localhost:1337/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: data.email,
        password: data.password,
      }),
    });
    const json = await resp.json();
    console.log(json);

    if (json.jwt) {
      setAuth(true);
      setUser({ name: json.user.username, email: json.user.email });
      redirect('/');
    }
  }

  return (
    <Layout>
      <div
        className="bg-fixed object-cover min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${'/loginbg.jpg'})` }}
      >
        <div className="bg-grey-lighter py-10 flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Login</h1>
              <form onSubmit={handleSubmit(handleLogin)}>
                <input
                  type="text"
                  className={inputStyle}
                  name="email"
                  ref={register}
                  placeholder="Email"
                />

                <input
                  type="password"
                  className={inputStyle}
                  name="password"
                  ref={register}
                  placeholder="Password"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-red-500 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
