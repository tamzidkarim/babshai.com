import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';

const inputStyle =
  'block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-red-500';

export default function Signup() {
  const { register, handleSubmit, watch, errors } = useForm<any>();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout>
      <div className="bg-grey-lighter py-10 flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className={inputStyle}
                name="fullname"
                ref={register}
                placeholder="Full Name"
              />

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
              <input
                type="password"
                className={inputStyle}
                name="confirm_password"
                ref={register}
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-red-500 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{' '}
              <a
                className="no-underline border-b border-gray-700 text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                className="no-underline border-b border-gray-700 text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-red-500"
              href="/login"
            >
              {' '}
              Log in
            </a>
            .
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
