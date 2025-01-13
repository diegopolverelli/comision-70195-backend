process.loadEnvFile("./src/.env")

export const config={
    PORT: process.env.PORT || 3009,
    MODE: process.env.MODE || "production"
}