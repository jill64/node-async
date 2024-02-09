import { PathLike, constants, access as nodeAccess } from 'node:fs'

export const access = (path: PathLike): Promise<boolean> =>
  new Promise<boolean>((resolve) => {
    nodeAccess(path, constants.F_OK, (err) => resolve(!err))
  })

export const exists = access
