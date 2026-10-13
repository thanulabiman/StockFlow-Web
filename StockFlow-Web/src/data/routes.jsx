import * as Pages from "@/pages";

export const routes = [
    {
        route: "/login",
        page: <Pages.Login />
    },
    {
        route: "/sign-up",
        page: <Pages.SignUp />
    },

    //Stock Manager
    {
        route: "/",
        page: <Pages.StockSummary />
    },

        {
        route: "/stock-summary",
        page: <Pages.StockSummary />
    },
        {
        route: "/stock-requests",
        page: <Pages.StockRequets />
    },
        {
        route: "/distribution-runs",
        page: <Pages.DistributionRuns />
    },
        {
        route: "/return-approvals",
        page: <Pages.ReturnApprovals />
    },


    //Error

    {
        route: "*",
        page: <Pages.Error />
    },

    //FDO
    {
        route: "/fdo",
        page: <Pages.FDOStockRequests />
    },

    {
        route: "/fdo/stock-requests",
        page: <Pages.FDOStockRequests />
    },

    {
        route: "/fdo/distributions",
        page: <Pages.FDODistributions />
    },

    {
        route: "/fdo/run-history",
        page: <Pages.FDORunHistory />
    },
]