import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, SignIn, SignUp } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import signUp from "./views/signUp";
import signIn from "./views/signIn";

export default [
  {
    path: "/",
    exact: true,
    layout: SignUp,
    // component: () => <Redirect to="/signup" />
    component: signUp
  },
  {
    path: "/signin",
    exact: true,
    layout: SignIn,
    component: SignIn
  },

  {
    path: "/signin",
    exact: true,
    layout: signIn,
    component: () => <Redirect to="/signin" />
  },
  // {
  //   path: "/blog-overview",
  //   exact: true,
  //   layout: DefaultLayout,
  //   component: () => <Redirect to="/blog-overview" />
  // },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
