process.loadEnvFile("./src/.env")  // esto solo funciona en versiones nuevas de node

export const config={
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL, 
    DB_NAME: process.env.DB_NAME
}
