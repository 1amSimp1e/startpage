import './app.css'
import App from './App.svelte'
import { writable } from 'svelte/store'

const defaultConfig = {
    banner: 1,
    weather: {
        apiKey: 'cd1707e22770abaa3196007e0c236030',
        lat: 29.7589382,
        lon: -95.3676974,
        units: 'Metric'
    },
    stocks: {
        source: 'fmp',
        fmpApiKey: '8f9f7fea27dd174702d9b08a743612e0',
        alpacaKeyId: '',
        alpacaSecretKey: '',
        tickers: [
            'SPY',
            'QQQ',
            'UVXY',
            'AAPL',
            'MSFT',
            'GOOGL',
            'AMZN',
            'TSLA',
            'NVDA'
        ]
    },
    links: [
        [
            { name: 'gmail', url: 'https://mail.google.com' },
            { name: 'calendar', url: 'https://calendar.google.com' },
            { name: 'drive', url: 'https://drive.google.com' },
            { name: 'docs', url: 'https://docs.google.com' }
        ],
        [
            { name: 'github', url: 'https://github.com' },
            { name: 'feedly', url: 'http://feedly.com' },
            { name: 'translate', url: 'https://translate.google.com' },
            { name: 'monkeytype', url: 'https://monkeytype.com' }
        ],
        [
            { name: 'finance', url: 'https://finance.google.com' },
            {
                name: 'fidelity',
                url: 'https://digital.fidelity.com/ftgw/digital/portfolio/summary'
            },
            { name: 'chase', url: 'https://chase.com' },
            { name: 'sheets', url: 'https://sheets.google.com' }
        ],
        [
            { name: 'youtube', url: 'https://youtube.com' },
            { name: 'twitch', url: 'http://twitch.tv' },
            { name: 'reddit', url: 'https://reddit.com' },
            { name: 'instagram', url: 'http://instagram.com' }
        ]
    ]
}
const storedConfig = JSON.parse(localStorage.getItem('config')) ?? defaultConfig
const config = writable(storedConfig)
config.subscribe((value) => {
    localStorage.setItem('config', JSON.stringify(value))
})

// @ts-ignore
const app = new App({
    target: document.getElementById('app'),
    props: {
        config: config
    }
})

export default app
