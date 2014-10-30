langs = [
    'ru'
    'ua'
]

for lang in langs
    module.exports[lang] = require "./#{lang}"
