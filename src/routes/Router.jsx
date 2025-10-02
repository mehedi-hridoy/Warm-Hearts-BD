import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Donation from "../pages/Donation";
import DonationDetail from "../pages/DonationDetail";
import GetInvolved from "../pages/GetInvolved";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout>
                <Home />
            </MainLayout>
        ),
    },
    {
        path: "/donation",
        element: (
            <MainLayout>
                <Donation />
            </MainLayout>
        ),
    },
    {
        path: "/donation/:id",
        element: (
            <MainLayout>
                <PrivateRoute>
                    <DonationDetail />
                </PrivateRoute>
            </MainLayout>
        ),
    },
    {
        path: "/get-involved",
        element: (
            <MainLayout>
                <GetInvolved />
            </MainLayout>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <MainLayout>
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            </MainLayout>
        ),
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "registration",
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error Page</h1>,
    }

])

export default router;