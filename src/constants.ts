import aeroflot from './assets/logos/aeroflot.png';
import britishAirways from './assets/logos/british-airways.png';
import s7Airlines from './assets/logos/s7-airlines.png';
import turkishAirlines from './assets/logos/turkish-airlines.png';

export const dataUrl: string = 'http://localhost:3000/tickets';
export const currencyRatesUrl: string = 'https://api.exchangeratesapi.io/latest';

export const logos: { [key: string]: string } = {
    TK: turkishAirlines,
    S7: s7Airlines,
    SU: aeroflot,
    BA: britishAirways,
};

export const baseCurrency: string = 'RUB';

export const currencyRatesInitial = {
    base: baseCurrency,
    rates: {
        [baseCurrency]: 1,
    }
};

export const currencies: { [key: string]: string } = {
    RUB: '₽',
    USD: '$',
    EUR: '€',
};
