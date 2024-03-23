import User from './users.model'

export const findLastUserId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({}, { id: 1 })
    .sort({ createdAt: -1 })
    .lean()

  return lastUser?.id
}

export const generatedUserId = async (): Promise<string> => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
