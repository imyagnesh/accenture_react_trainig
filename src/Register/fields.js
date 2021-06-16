import React, { Component } from "react";
import {Formik, FormikInput } from "formik";

const fields = [{
    name: "name",
    label: "Name",
    value: " ",
    component: FormikInput,
},
{
    name: "username",
    label: "Username",
    value: " ",
    component: FormikInput,
},
{
    name: "password",
    label: "Password",
    value: " ",
    component: FormikInput,
},
{
    name: "checkingpassword",
    label: "Check Password",
    value: " ",
    component: FormikInput,
}]

export default fields