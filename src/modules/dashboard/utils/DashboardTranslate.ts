import { BikeUseEnum } from 'modules/bicycles/models/enum';
import { IncomeEnum, SchoolingEnum } from 'modules/users/models/enums';
import DateUtils from 'shared/utils/DateUtils';

const DashboardTranslate = {
  translateIncome(income: string) {
    if (income === IncomeEnum.until150) {
      return 'Até R$150';
    }

    if (income === IncomeEnum.from150To300) {
      return 'Entre R$150 e R$350';
    }

    if (income === IncomeEnum.from500To700) {
      return 'Entre R$500 e R$750';
    }

    if (income === IncomeEnum.from750To1100) {
      return 'Entre R$750 e R$1100';
    }

    if (income === IncomeEnum.from1100To2000) {
      return 'Entre R$1100 e R$2000';
    }

    if (income === IncomeEnum.above2000) {
      return 'Mais de R$2000';
    }

    return 'Desejo não informar';
  },

  translateAge(age: string) {
    const ageValue = DateUtils.calculateAge(age);
    if (ageValue >= 11 && ageValue <= 20) {
      return 'Entre 11 e 20 anos';
    }

    if (ageValue >= 21 && ageValue <= 30) {
      return 'Entre 21 e 30 anos';
    }

    if (ageValue >= 31 && ageValue <= 40) {
      return 'Entre 31 e 40 anos';
    }

    if (ageValue >= 41 && ageValue <= 50) {
      return 'Entre 41 e 50 anos';
    }

    if (ageValue > 50) {
      return 'Maior que 50 anos';
    }

    return 'Não especificado';
  },

  translateSchooling(schooling: string, schoolingStatus: string) {
    let status = schoolingStatus;
    if (
      schooling === SchoolingEnum.NotInformed ||
      schooling === SchoolingEnum.SemOuMenosDeUmAno
    ) {
      return 'Não determinado';
    }

    if (schoolingStatus === 'Não') {
      status = 'Incompleto';
    }

    if (schoolingStatus === 'Sim') {
      status = 'Completo';
    }

    if (schoolingStatus === 'Em curso') {
      status = 'Cursando';
    }

    return `${schooling} ${status}`;
  },

  translateWithdrawalsReason(reason: string) {
    if (reason === BikeUseEnum.AppDeliver) {
      return 'Entrega de aplicativos';
    }

    if (reason === BikeUseEnum.GoToWork) {
      return 'Seu local de trabalho';
    }

    if (reason === BikeUseEnum.GoToSchool) {
      return 'Seu local de estudo';
    }

    if (reason === BikeUseEnum.TransportKids) {
      return 'Local de estudo da criança';
    }

    if (reason === BikeUseEnum.Errands) {
      return 'Seu local de compras';
    }

    if (reason === BikeUseEnum.Leisure) {
      return 'Seu local de lazer / convivência social';
    }

    return 'Outro motivo não especificado';
  },
};

export default DashboardTranslate;
