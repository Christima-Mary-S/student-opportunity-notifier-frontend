import { createSelector } from "reselect";

export const selectIsAuthenticated = createSelector(
    state => state.auth,
    auth => auth.isUserAuthenticated
);

export const selectisAdmin = createSelector(
    state => state.auth,
    auth => auth.isAdmin
);

export const selectUser = createSelector(
    state => state.auth,
    auth => auth.user
);

export const selectSavedArticles = createSelector(
    state => state.auth,
    auth => auth.savedArticles
);

export const selectUsers = createSelector(
    state => state.admin,
    admin => admin.users
);

export const selectErrors = createSelector(
    state => state.errors,
    errors => errors.errors
);



