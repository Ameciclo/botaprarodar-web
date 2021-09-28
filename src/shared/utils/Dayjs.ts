import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';

dayjs.locale('pt-br');
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.extend(advancedFormat);
