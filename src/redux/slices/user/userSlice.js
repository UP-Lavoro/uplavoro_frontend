import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: "",
    cvList: [],
    info: {
      cv: {},
      consents: {},
      profile: {}
    },
    jobOffers: [],
    favouriteOffers: [],
    appliedOffers: [],
    cities: [],
    message: "",
    configuration: null
  },
  reducers: {
    userRequestLoading: (state, action) => {
      state.isLoading = true;
      state.error = "";
    },
    invalidRequest: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setUser: (state, action) => {
      console.log("🚀 ~ file: authSlice.js:70 ~ action:", action?.payload[0])
      let userObj = action?.payload[0]
      if(userObj){
        state.info.profile = userObj;
      }
      state.isLoading = false;
    },

    userSettingsSave: (state, action)=> {
      state.isLoading = false;
    },
    getConfigurations: (state, action) => {
      state.configuration = action?.payload
      state.isLoading = false;
      state.error = "";
      state.message = "Configurations fetched successfully";
    },
    getCities: (state, action) =>{
      state.cities = [...action.payload.cities];
      state.isLoading = false;
      state.error = "";
      state.message = "Cities fetched successfully";
    },
    getCvList: (state, action) => {
      state.cvList = action.payload;
      state.isLoading = false;
      state.error = "";
      state.message = "CV's fetched successfully";
    },
    saveCV: (state, action) => {
      state.info.cv = action.payload;
      state.isLoading = false;
      state.error = "";
      state.message = "Created CV Successfully";
    },
    updateCV: (state, action) => {
      state.info.cv = action.payload;
      state.isLoading = false;
      state.error = "";
      state.message = "CV updated Successfully";
    },
    deleteCV: (state, action) => {
      state.info.cv = action.payload;
      state.isLoading = false;
      state.error = "";
      state.message = "CV deleted successfully";
    },
    userConsents: (state, action)=>{
      state.info.consents = action?.payload
      state.isLoading = false;
    },
    userLogout: (state, action)=>{
      state.info.consents = {}
      state.info.cv = {};
      state.info.profile = {};
    },
    getFavouriteOffers: (state, action)=>{
      state.isLoading = false;
      state.favouriteOffers = action?.payload;
    },
    getAppliedOffers: (state, action)=>{
      state.isLoading = false;
      state.appliedOffers = action?.payload;
    },
    getJobOffers: (state, action)=>{
      state.isLoading = false;
      state.jobOffers = action?.payload;
    },
    addRemoveFavOffer: (state, action)=>{
      console.log('in reduces',action?.payload)
      state.isLoading = false;
      if(action?.payload?.job_id){
        let updatedFavOffers = state.favouriteOffers?.filter(obj=> obj.id != action?.payload?.job_id)
        state.favouriteOffers = updatedFavOffers
      }
    },
    addRemoveAppliedOffer: (state, action)=>{
      state.isLoading = false;
      // state.jobOffers = action?.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  userRequestLoading,
  invalidRequest,
  setUser,
  userSettingsSave,
  getConfigurations,
  getCities,
  getCvList,
  saveCV,
  updateCV,
  deleteCV,
  userConsents,
  userLogout,
  getFavouriteOffers,
  getAppliedOffers,
  getJobOffers,
  addRemoveFavOffer,
  addRemoveAppliedOffer
} = userSlice.actions;
