// @ts-ignore: this is safe, we don't want to actually make language.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import languageScript from "./scripts/language.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import languageStyle from "./styles/language.scss"

const languages = [
    { code: 'en', name: 'English' },
    { code: 'ko', name: 'Korean' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Chinese' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' }
];

const Language: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
        <div class="language-selector">
            <label for="language-select">Language: </label>
            <select id="language-select">
                {languages.map(language => (
                    <option value={language.code} key={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

Language.beforeDOMLoaded = languageScript;
Language.css = languageStyle;
export default (() => Language) satisfies QuartzComponentConstructor
