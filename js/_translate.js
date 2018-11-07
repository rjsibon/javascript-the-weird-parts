import {TRANSLATABLE_STRINGS} from './_translations.js';

/**
 * Translate a single string.
 * @param {string} lang
 * @param {string} string
 */
export function translateString(lang, string) {
    const elementToTranslate = document.querySelector('[data-translate="' + string + '"]');

    let newString;
    let oldString;

    // Get translation for string.
    if (TRANSLATABLE_STRINGS[lang][string] !== null && typeof TRANSLATABLE_STRINGS[lang][string] !== 'undefined') {
        newString = TRANSLATABLE_STRINGS[lang][string];
    } else {
        // Fallback to English.
        newString = TRANSLATABLE_STRINGS['en'][string];
    }

    if (elementToTranslate) {
        // String to translate is in input.
        if (elementToTranslate.nodeName === 'INPUT') {
            if (elementToTranslate.type === 'submit') {
                // If input element is of type 'submit' set new value.
                elementToTranslate.value = newString;
            } else {
                // All other input elements get there placeholder translated.
                elementToTranslate.setAttribute('placeholder', newString);
            }
        } else {
            // Text node inside element that can be replaced.
            oldString = elementToTranslate.innerHTML;

            elementToTranslate.innerHTML = elementToTranslate.innerHTML.replace(oldString, newString);
        }
    }
}

/**
 * Translate page or single string.
 * @param {string} lang
 * @param {boolean|string} oneString
 */
export function translateApp(lang, oneString = false) {

    // Translate all translatable strings unless one is specified.
    if (!oneString) {
        for (const string in TRANSLATABLE_STRINGS[lang]) {
            translateString(lang, string);
        }

    // Translate a single string if it is passed in.
    } else {
        if (typeof oneString === 'string') {
            translateString(lang, oneString);
        }
    }
}