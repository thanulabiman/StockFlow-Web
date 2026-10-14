import * as Pages from "@/pages";

export const routes = [
    {
        title: "Login",
        route: "/login",
        page: <Pages.Login />
    },
    {
        title: "Sign Up",
        route: "/sign-up",
        page: <Pages.SignUp />
    },

    //Stock Manager
    {
        title: "Stock Summary",
        route: "/",
        page: <Pages.StockSummary />
    },

    {
        title: "Stock Summary",
        route: "/stock-summary",
        page: <Pages.StockSummary />
    },
    {
        title: "Stock Requests",
        route: "/stock-requests",
        page: <Pages.StockRequets />
    },
    {
        title: "Distribution Runs",
        route: "/distribution-runs",
        page: <Pages.DistributionRuns />
    },
    {
        title: "Return Approvals",
        route: "/return-approvals",
        page: <Pages.ReturnApprovals />
    },


    //Error

    {
        title: "Error",
        route: "*",
        page: <Pages.Error />
    },

    //FDO
    {
        title: "Stock Requests",
        route: "/fdo",
        page: <Pages.FDOStockRequests />
    },

    {
        title: "Stock Requests",
        route: "/fdo/stock-requests",
        page: <Pages.FDOStockRequests />
    },

    {
        title: "Distributions",
        route: "/fdo/distributions",
        page: <Pages.FDODistributions />
    },

    {
        title: "Run History",
        route: "/fdo/run-history",
        page: <Pages.FDORunHistory />
    },
]