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

export const selectErrors = createSelector(
    state => state.errors,
    errors => errors.errors
);


