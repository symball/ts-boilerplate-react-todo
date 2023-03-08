import React from 'react'
import {i18nLanguages} from "@/lib/config";
import i18n from 'i18next'

export const LanguageSwitcher = () => {
    return (
        <select id="lang" onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
            {i18nLanguages.map((lng) => {
                return (
                    <option key={lng.code} value={lng.code}>{lng.name}</option>
                )
            })}
        </select>
    )
}