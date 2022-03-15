import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { auth, db } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth"
import SignIn from "../components/SignInForm";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  // useAuthState returns array of 3, first is user, second is loading, third is error
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loading />;

  if (!user) return <SignIn />;

  return <Component {...pageProps} />;
}

export default MyApp;
