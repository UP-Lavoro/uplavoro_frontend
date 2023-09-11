import { errorNotification, successNotification } from "@/utils/notification";
import { axiosBaseQuery } from "../axiosBaseQuery";
import { adminRequestLoading, getBranchCompaniesList, getBranchJobOffersList, getBranchUsersList, getBranchesList, getCompaniesList, getJobOffersCategoryList, getJobOffersGroupList, getJobOffersList, getUsersList, setAdmin } from "../slices/admin/adminSlice";

export const getAdmin = (token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/admin/users/1",
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(setAdmin(res?.data?.data[0]))
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const getUsers = (token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())
    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/admin/users",
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(getUsersList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const createUser = (data, token, router) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/admin/users/add",
      body: data,
      token: token,
    });
    console.log("🚀 ~ createuser:", res)
    if (res?.data?.code == 0) {
      // dispatch(getJobOffersCategoryList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
}

export const getJobOffers = (token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/admin/jobs",
      token: token,
    });
    console.log("🚀 ~ file: adminActions.js:49 ~ getJobOffers ~ res:", res)
    if (res?.data?.code == 0) {
      dispatch(getJobOffersList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const getJobOffersGroup = (token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/admin/jgroup",
      token: token,
    });
    console.log("🚀 ~ file: adminActions.js:49 ~ getJobOffers ~ res:", res)
    if (res?.data?.code == 0) {
      dispatch(getJobOffersGroupList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const getJobOffersCategory = (token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/admin/jcategory",
      token: token,
    });
    console.log("🚀 ~ file: adminActions.js:49 ~ getJobOffers ~ res:", res)
    if (res?.data?.code == 0) {
      dispatch(getJobOffersCategoryList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const createJobGroup = (data, token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/admin/jgroup",
      body: data,
      token: token,
    });
    console.log("🚀 ~ file: adminActions.js:49 ~ getJobOffers ~ res:", res)
    if (res?.data?.code == 0) {
      // dispatch(getJobOffersCategoryList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const createJobCategory = (data, token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "POST",
      url: "/api/admin/jcategory",
      body: data,
      token: token,
    });
    console.log("🚀 ~ file: adminActions.js:49 ~ getJobOffers ~ res:", res)
    if (res?.data?.code == 0) {
      // dispatch(getJobOffersCategoryList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};



export const getCompanies = (token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/admin/companies",
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(getCompaniesList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};


export const getBranches = (token) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "GET",
      url: "/api/admin/branches",
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(getBranchesList(res?.data?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const getBranchUsers = (token, id) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "GET",
      url: `/api/admin/branches/users/${id}`,
      token: token,
    });
    console.log("🚀 ~ file: adminActions.js:185 ~ getBranchUsers ~ res:", res)
    if (res?.data?.code == 0) {
      dispatch(getBranchUsersList(res?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const getBranchCompanies = (token, id) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "GET",
      url: `/api/admin/branches/companies/${id}`,
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(getBranchCompaniesList(res?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};

export const getBranchJobOffers = (token, id) => async (dispatch) => {
  console.log("🚀 ~ file: userActions.js:6 ~ getUser ~ token:", token)
  try {
    dispatch(adminRequestLoading())

    const res = await axiosBaseQuery({
      method: "GET",
      url: `/api/admin/branches/jobOffers/${id}`,
      token: token,
    });
    if (res?.data?.code == 0) {
      dispatch(getBranchJobOffersList(res?.data?.data));
    }
  } catch (e) {
    console.log("🚀 ~ file: authActions.js:47 ~ loginUser ~ e:", e);
  }
};