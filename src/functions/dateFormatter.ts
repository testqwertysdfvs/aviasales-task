import moment from 'moment';

export default function(date: string): string {
    const localeData: string = moment(date).locale('ru').format("D MMM YYYY, dd");
    return localeData.replace('.', '').replace(/(,\s)(.)/g, $1 => $1.toUpperCase());
}
