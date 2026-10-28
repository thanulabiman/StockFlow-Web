export const UserRole = Object.freeze({
    STOCK_MANAGER : "stock-manager",
    FDO : "fdo"
});

export const RouteAccess = Object.freeze({
    PUBLIC : "public",
    PROTECTED : "protected"
});

export const homeByRole = Object.freeze({
    [UserRole.STOCK_MANAGER]: "/stock-summary",
    [UserRole.FDO]: "/fdo/stock-requests",
});