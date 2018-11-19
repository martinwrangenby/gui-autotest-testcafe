import { Selector } from 'testcafe';

export async function getPageTitle(title) {
  return await Selector('.toolbar-title span').withExactText(title).exists;
}
