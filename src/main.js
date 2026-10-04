const guests = {
  marie: { name: 'Marie', lang: 'fr', gender: 'f' },
  john: { name: 'John', lang: 'en', gender: 'm' },
  giyeon: { name: 'Giyeon', lang: 'fr', gender: 'f' },
  gayeong: { name: 'Gayeong', lang: 'en', gender: 'f' },
}

const texts = {
  en: {
    to: { default: 'To.' },
    msg: 'Your presence will be the greatest gift.',
  },
  fr: {
    to: { m: 'Cher', f: 'Chère', default: 'À.' },
    after: ',',
    msg: 'Votre présence sera le plus beau des cadeaux.',
  },
}

const DEFAULT_LANG = 'en'

const code = new URLSearchParams(location.search).get('g')
const guest = Object.hasOwn(guests, code) ? guests[code] : null
const lang = guest ? guest.lang : DEFAULT_LANG

document.documentElement.lang = lang

const dear = document.getElementById('dear')
if (guest) {
  const to = texts[lang].to
  const salutation = to[guest.gender] ?? to.default
  dear.textContent = `${salutation} ${guest.name}${texts[lang].after ?? ''}`
} else {
  dear.hidden = true
}

document.getElementById('thanks').textContent = texts[lang].msg
