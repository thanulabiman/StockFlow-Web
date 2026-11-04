import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL ?? "http://127.0.0.1:4000",
});

export async function fetchStockSummary({ warehouse, month }) {
    try {
        const response = await api.get("/api/stock-summary", {
            params: { warehouse, month }
        });

        return response.data;

    } catch (error) {
        console.log("Backend error:", error.response?.data);
        console.log("Status:", error.response?.status);

        throw error;
    }
}