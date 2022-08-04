export type IncomeTypes =
  | '>150'
  | '150-300'
  | '500-700'
  | '750-1100'
  | '1100-2000'
  | '+2000'
  | 'not informed';

export const IncomeEnum = {
  until150: '>150',
  from150To300: '150-300',
  from500To700: '500-700',
  from750To1100: '750-1100',
  from1100To2000: '1100-2000',
  above2000: '+2000',
  notInformed: 'not informed',
};
