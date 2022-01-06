import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';

//ruuning on browser
export default function signIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="p-3 rounded-lg bg-sky-400 text-white"
            onClick={() => SignIntoProvider(provider.id)}
          >
            LOGIN
          </button>
        </div>
      ))}
    </>
  );
}

//middle server rendering
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
