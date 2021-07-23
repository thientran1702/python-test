// tuple of allowed string prefixes
const ALLOWED_WORD_PREFIXES = new Set([
    '1A',
    '1B',
    '1C',
])


function validate_word_prefixes(words):
    let valid_words = []
    words.forEach(element => {
        if word.startsWith(ALLOWED_WORD_PREFIXES):
            valid_words = word
    }
    return valid_words
