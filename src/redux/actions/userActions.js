import { errorNotification, successNotification } from "@/utils/notification";
import { axiosBaseQuery } from "../axiosBaseQuery";
import { invalidRequest, authRequestLoading, getCities, userRequestLoading, userSettingsSave, getConfigurations, saveCV, getCvList, userConsents, setUser, updateCV, getFavouriteOffers, getAppliedOffers, getJobOffers, addRemoveFavOffer } from "../slices/user/userSlice";

export const getUser = (token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/user",
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(setUser(res?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const userSettings = (data, token, router) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/update_profile",
      body: { ...data },
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(userSettingsSave())
      router.push("/profile");
      successNotification(res?.data?.msg)
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};

export const getConfig = (token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/configration",
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(getConfigurations(res?.data?.data))
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};

export const getCitiesData = (token) => async (dispatch) => {
  try {
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/city",
      token: token,
    });
    if(res?.data?.code == 0){
      dispatch(getCities(res?.data?.data))
    }
  } catch (error) {
    console.log("🚀 ~ file: userActions.js:30 ~ getCities ~ error:", error)
  }
};

export const getUserCV = (token) => async (dispatch) => {
  try {
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/cv",
      token: token,
    });
    if(res?.data?.code == 0){
      dispatch(getCvList(res?.data?.data))
    }
  } catch (error) {
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};

export const saveUserCV = (data, token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/cv/store",
      body: { ...data },
      token: token,
    });
    
    if(res?.data?.code == 0){
      dispatch(saveCV(res?.data?.data))
    }
  } catch (error) {
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
    dispatch(invalidRequest())
    
  }
};

export const updateUserCV = (data, token, router) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/cv/update",
      body: { ...data },
      token: token,
    });
    if(res?.data?.code == 0){
      dispatch(updateCV(res?.data?.data))
    }
    
  } catch (error) {
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
    dispatch(invalidRequest())
  }
};

export const deleteUserCV = (data, token) => async (dispatch) => {
  try {
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/cv/delete",
      body: data,
      token: token,
    });
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};

export const getUserConsents = (data, token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/user_concents",
      body: data,
      token: token,
    });
    if(res?.data?.code == 0){
      dispatch(getUser(token))
      dispatch(userConsents(res?.data?.data))
      successNotification(res?.data?.msg)
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};


export const getFavouriteJobOffers = (token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "GET",
      url: "api/job/fav",
      token: token,
    });
    console.log("🚀 ~ file: userActions.js:170 ~ getFavouriteJobOffers ~ res:", res?.data?.data)
    if(res?.data?.code == 0){
      dispatch(getFavouriteOffers(res?.data?.data)) 
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};

export const getAppliedJobOffers = (token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/job/applied",
      token: token,
    });
    if(res?.data?.code == 0){
      dispatch(getAppliedOffers(res?.data?.data))
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};

export const getAllJobOffers = (token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/job/offers",
      token: token,
    });
    if(res?.data?.code == 0){
      dispatch(getJobOffers(res?.data?.data))
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};

export const addRemoveFavouriteOffer = (data, token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/job/fav",
      body: data,
      token: token,
    });
    if(res?.data?.code == 0){
      successNotification(res?.data?.msg)
      dispatch(addRemoveFavOffer(data))
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};


export const applyForJob = (data, token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/job/applied",
      body: data,
      token: token,
    });
    if(res?.data?.code == 0){
      successNotification(res?.data?.msg)
      // dispatch(addRemoveFavOffer(res?.data?.data))
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};

export const removeAppliedOffer = (data, token) => async (dispatch) => {
  try {
    dispatch(userRequestLoading())
    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/job/applied",
      body: data,
      token: token,
    });
    if(res?.data?.code == 0){
      successNotification(res?.data?.msg)
      dispatch(addRemoveFavOffer(data))
    }
  } catch (error) {
    dispatch(invalidRequest())
    console.log("🚀 ~ file: userActions.js:19 ~ userSettings ~ error:", error);
  }
};
