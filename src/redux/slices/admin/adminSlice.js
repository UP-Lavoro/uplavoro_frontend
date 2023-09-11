import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    error: "",
    admin: null,
    message: "",
    users: null,
    jobOffers: null,
    jobOfferGroups: null,
    jobOfferCategories: null,
    companies: null,
    branches: null,
    branchUsers: null,
    branchCompanies: null, 
    branchJobOffers: null
  },
  reducers: {
    adminRequestLoading: (state, action) => {
      state.isLoading = true;
      state.error = "";
    },
    invalidRequest: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setAdmin: (state, action) => {
      state.isLoading = false;
      state.admin = action?.payload;
    },
    getUsersList: (state, action) => {
      state.isLoading = false;
      state.users = action?.payload
    },
    getJobOffersList: (state, action) => {
      state.isLoading = false;
      state.jobOffers = action?.payload
    },
    getJobOffersGroupList: (state, action) => {
      state.isLoading = false;
      state.jobOfferGroups = action?.payload
    },
    getJobOffersCategoryList: (state, action) => {
      state.isLoading = false;
      state.jobOfferCategories = action?.payload
    },

    getCompaniesList: (state, action) => {
      state.isLoading = false;
      state.companies = action?.payload
    },
    getBranchesList: (state, action) => {
      state.isLoading = false;
      state.branches = action?.payload
    },
    getBranchUsersList: (state, action) => {
      state.isLoading = false;
      state.branchUsers = action?.payload
    },
    getBranchCompaniesList: (state, action) => {
      state.isLoading = false;
      state.branchCompanies = action?.payload
    },
    getBranchJobOffersList: (state, action) => {
      state.isLoading = false;
      state.branchJobOffers = action?.payload
    },
  },
});

export default adminSlice.reducer;
export const { adminRequestLoading, invalidRequest, setAdmin, getUsersList, getJobOffersList, getJobOffersGroupList, getJobOffersCategoryList, getCompaniesList, getBranchesList, getBranchUsersList, getBranchCompaniesList, getBranchJobOffersList } =
  adminSlice.actions;
