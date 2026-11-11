export const CONFIG = {
API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://nbackend-project.onrender.com",
STORAGE_KEYS: {
    ACCESS_TOKEN: "accessToken",
    REFRESH_TOKEN: "refreshToken",
},
ROUTES: {
    HOME: "/",
    LOGIN: "/login",
    DASHBOARD: "/dashboard"
}

} as const;