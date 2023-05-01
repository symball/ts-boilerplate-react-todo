export const i18nDebug: boolean = !!import.meta.env.I18N_DEBUG || false;
export const defaultLoginPage: string = import.meta.env.DEFAULT_LOGIN_PAGE || '/dashboard';

export type LanguageDefinition = {
  code: string;
  name: string;
};
export const i18nLanguages: Array<LanguageDefinition> = import.meta.env.I18N_LANGUAGES
  ? JSON.parse(import.meta.env.I18N_LANGUAGES)
  : [
      { code: 'en', name: 'English' },
      { code: 'zh', name: '中文' },
    ];
