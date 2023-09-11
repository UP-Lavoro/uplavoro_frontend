import {
  errorNotification,
  successNotification,
  warningNotification,
} from "@/utils/notification";
import { axiosBaseQuery } from "../axiosBaseQuery";
import {
  invalidRequest,
  register,
  authRequestLoading,
  login,
  logout,
  setUser,
  thirdPartyUserState,
  thirdPartyUserStateClose,
  recoverPassword,
} from "../slices/auth/authSlice";
import { userLogout } from "../slices/user/userSlice";

export const registerUser = (data, router) => async (dispatch) => {
  try {
    dispatch(authRequestLoading());
    let postObj;
    if (data?.source_domain) {
      postObj = data;
    } else {
      let obj = {
        name: data?.user?.name ? data?.user?.name : "default",
        surname: "",
        email: data?.email ? data?.email : "",
        phone: "",
        fiscal_code: "",
        gender: "M",
        birth_date: "2023-01-01",
        birth_nation: "",
        birth_municipality: "",
        residence_address: "",
        residence_municipality: "",
        residence_province: "",
        residence_postalcode: "",
        taxIdCode: data?.taxIdCode ? data?.taxIdCode : "",
      };
      postObj = obj;
    }

    function responseHandling(response) {
      if (response?.data?.code == 0) {
        let message = response?.data?.msg;
        router.push("/login");
        successNotification(message);
        dispatch(thirdPartyUserStateClose());
      }
      if (response?.data?.code == -1) {
        let message = response?.data?.data[0];
        errorNotification(...message);
        dispatch(thirdPartyUserStateClose());
      }
    }

    if (postObj?.source_domain != "" && !postObj?.taxIdCode) {
      const response = await axiosBaseQuery({
        method: "POST",
        url: "/api/register",
        body: postObj,
      });
      responseHandling(response);
    }
    if (
      postObj?.email != "" &&
      postObj?.taxIdCode != "" &&
      !postObj?.source_domain
    ) {
      const res = await axiosBaseQuery({
        method: "POST",
        url: "/api/register",
        body: postObj,
      });
      responseHandling(res);
      console.log("🚀 ~ file: authActions.jc:", res);
      // if(res?.data?.code == 0){
      //   router.push('/login')
      //   dispatch(thirdPartyUserStateClose())
      // }
      // if(res?.data?.code == -1){
      //   let message = res?.data?.data[0];
      //   console.log("🚀 ~ file: authActions.js:47 ~ registerUser ~ message:", message)
      //   errorNotification(...message)
      //   dispatch(thirdPartyUserStateClose())
      // }
    }
  } catch (e) {}
};

export const registerCompany = (data, router) => async (dispatch) => {
  try {
    dispatch(authRequestLoading());
   
    function responseHandling(response) {
      if (response?.data?.code == 0) {
        let message = response?.data?.msg;
        router.push("/login");
        successNotification(message);
        dispatch(thirdPartyUserStateClose());
      }
      if (response?.data?.code == -1) {
        let message = response?.data?.data[0];
        errorNotification(...message);
        dispatch(thirdPartyUserStateClose());
      }
    }
    
      const res = await axiosBaseQuery({
        method: "POST",
        url: "/api/register_company",
        body: data,
      });
      responseHandling(res);
      
  } catch (e) {}
};

export const loginUser = (router, data) => async (dispatch) => {
  try {
    dispatch(authRequestLoading());
    let obj = {
      email: data?.email,
      password: data?.password,
      source_domain: "web",
    };
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/login",
      body: obj,
    });
    if (res?.data?.code == 0) {
      console.log("🚀 ~ file: authActions.js:103 ~ res:", res);
      successNotification("Login Successfully");
      dispatch(login(res?.data?.data));
      let { user } = res?.data?.data;
      if (
        user?.name != null &&
        user?.surname != null &&
        user?.gender != null &&
        user?.birth_date != null &&
        user?.birth_nation != null &&
        user?.birth_municipality != null &&
        user?.residence_address != null &&
        user?.residence_postalcode != null &&
        user?.phone != null
      ) {
        router.push("/profile");
      } else {
        router.push("profile/settings");
      }
    }

    if (res?.data?.code == -1) {
      let message = res?.data?.data[0];
      errorNotification(...message);
      dispatch(invalidRequest());
    }
  } catch (error) {
    dispatch(invalidRequest());
    errorNotification(error);
  }
};

export const loginAdmin = (router, data) => async (dispatch) => {
  try {
    dispatch(authRequestLoading());
    
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/admin/login",
      body: data,
    });
    if (res?.data?.code == 0) {
      console.log("🚀 ~ file: authActions.js:103 ~ res:", res);
      successNotification("Login Successfully");
      dispatch(login(res?.data?.data));
      router.push("/admin");
    }

    if (res?.data?.code == -1) {
      let message = res?.data?.data[0];
      errorNotification(...message);
      dispatch(invalidRequest());
    }
  } catch (error) {
    dispatch(invalidRequest());
    errorNotification(error);
  }
};

export const loginCompany = (router, data) => async (dispatch) => {
  try {
    dispatch(authRequestLoading());
    let obj = {
      email: data?.email,
      password: data?.password,
      source_domain: "web",
    };
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/login",
      body: obj,
    });
    if (res?.data?.code == 0) {
      console.log("🚀 ~ file: authActions.js:103 ~ res:", res);
      successNotification("Login Successfully");
      dispatch(login(res?.data?.data));
      router.push("/company");
    }

    if (res?.data?.code == -1) {
      let message = res?.data?.data[0];
      errorNotification(...message);
      dispatch(invalidRequest());
    }
  } catch (error) {
    dispatch(invalidRequest());
    errorNotification(error);
  }
};

export const forgetPassword = (data, router) => async (dispatch) => {
  try {
    dispatch(authRequestLoading());
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/forgotpassword",
      body: data,
    });
    if (res?.data.code == 0) {
      dispatch(recoverPassword());
      router.push("/login");
      successNotification(res?.data?.msg);
    }
    if (res?.data.code == -1) {
      let message = res?.data?.data[0];
      dispatch(invalidRequest());
      errorNotification(...message);
      setTimeout(() => {
        warningNotification("Plese enter valid email!");
      }, [1000]);
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const logoutUser = (token, router) => async (dispatch) => {
  console.log("🚀 ~ file: authActions.js:156 ~ logoutUser ~ token:", token);
  try {
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/logout",
      token: token,
    });
    if (res?.data?.code == 0) {
      router.push("/login");
      dispatch(logout());
      dispatch(userLogout())
      successNotification("Logout Successfully")
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const logoutCompany = (token, router) => async (dispatch) => {
  console.log("🚀 ~ file: authActions.js:156 ~ logoutUser ~ token:", token);
  try {
      dispatch(logout());

    // const res = await axiosBaseQuery({
    //   method: "GET",
    //   url: "/api/logout",
    //   token: token,
    // });
    // if (res?.data?.code == 0) {
    //   router.push("/login");
    //   dispatch(logout());
    //   dispatch(userLogout())
    //   enqueueSnackbar("Logout Successfully", { variant: "success" });
    // }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const logoutAdmin = (token, router) => async (dispatch) => {
  console.log("🚀 ~ file: authActions.js:156 ~ logoutUser ~ token:", token);
  try {
      dispatch(logout());

    // const res = await axiosBaseQuery({
    //   method: "GET",
    //   url: "/api/logout",
    //   token: token,
    // });
    // if (res?.data?.code == 0) {
    //   router.push("/login");
    //   dispatch(logout());
    //   dispatch(userLogout())
    //   enqueueSnackbar("Logout Successfully", { variant: "success" });
    // }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const handleThirdPartyRegister = () => async (dispatch) => {
  try {
    dispatch(thirdPartyUserState());
  } catch (error) {}
};
