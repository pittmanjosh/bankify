import {hashSync, genSaltSync} from 'bcryptjs';

export default function hasher(password) {
  return hashSync(password, genSaltSync());
}
