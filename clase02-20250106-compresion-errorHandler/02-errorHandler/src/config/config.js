process.loadEnvFile("./src/.env")

export const config={
    PORT: process.env.PORT, 
    MODE: process.env.MODE
}