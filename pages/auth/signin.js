import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import facebook from "../../assets/facebook1.png";
import Header from "../../components/Header";
export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Header />
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 mt-32">
              <Image src={facebook} />
            </div>
            <div className="text-center">
              <p className="mt-4">
                This is not a REAL app it is built for educational purpose only!
              </p>
            </div>
            <div className="mt-12 bg-blue-500 p-3 rounded-full text-white  hover:bg-blue-400">
              <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                Sign in with {provider.name}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
