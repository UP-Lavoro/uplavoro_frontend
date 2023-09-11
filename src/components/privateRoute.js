import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const withAuth = Component => {
    const Auth = (props) => {  
      // If user is not logged in, return login component
      const auth = useSelector(state => state.auth)
      const router = useRouter()
      const isLoggedIn = auth?.isAuthenticated ? true : false;
      
      if (!auth?.isAuthenticated) {
        router.push('/login')
      }
        return (
          <Component {...props} />
        );
      
  
      // If user is logged in, return original component
      
    };
  
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withAuth;