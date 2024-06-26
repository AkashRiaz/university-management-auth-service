import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
}
