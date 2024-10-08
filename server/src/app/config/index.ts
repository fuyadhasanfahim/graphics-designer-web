import dotEnv from 'dotenv';
import path from 'path';

dotEnv.config({
    path: path.join(process.cwd(), '.env'),
});

export default {
    origin: process.env.ORIGIN,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_secret: process.env.JWT_SECRET,
};
