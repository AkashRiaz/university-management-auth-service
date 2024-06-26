import config from '../../../config'
import { IUser } from './users.interface'
import User from './users.model'
import { generatedUserId } from './users.utills'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id need
  const id = await generatedUserId()
  user.id = id as string

  // default password need
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('Failed to create user')
  }

  return createdUser
}

export default {
  createUser,
}
